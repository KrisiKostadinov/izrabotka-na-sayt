"use server";

import bcrypt from "bcryptjs";

import { formSchema, FormSchemaProps } from "@/app/(auth)/register/_schemas";
import { replaceVariables } from "@/lib/mails/helper";
import { sendEmail } from "@/lib/mails/send-email";
import { prisma } from "@/db/prisma";
import { generateToken, generateConfirmationLink } from "@/app/(auth)/_actions";

export const registerUser = async (values: FormSchemaProps) => {
  const validatedValues = formSchema.safeParse(values);

  if (!validatedValues.success) {
    return { error: "Данните в полетата са невалидни" };
  }

  const isUserExisting = await prisma.user.findUnique({
    where: { email: values.email },
  });

  if (isUserExisting) {
    return { error: "Този потребител вече съществува" };
  }

  const hashedPassword = await bcrypt.hash(values.password, 10);

  const numberOfUsers = await prisma.user.count();
  const role = numberOfUsers === 0 ? "ADMIN" : "USER";
  
  const token = await generateToken(512);

  try {
    return { message: "Профилът беше създаден", createdUser: await prisma.$transaction(async (tx) => {
        const createdUser = await tx.user.create({
          data: {
            email: values.email,
            password: hashedPassword,
            role,
          },
        });

        const emailTemplate = await tx.emailTemplate.findFirst({
          where: { key: "email-confirmation" },
        });

        if (!emailTemplate || emailTemplate.code.length < 10) {
          throw new Error("Имейл темплейтът не е намерен");
        }

        await tx.token.create({
          data: {
            token,
            userId: createdUser.id,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
          },
        });

        const link = await generateConfirmationLink(createdUser.id, token, "email-confirmation");

        const emailValues = {
          website_name: process.env.NEXT_PUBLIC_WEBSITE_TITLE || "",
          website_url: process.env.NEXT_PUBLIC_SITE_URL || "",
          current_year: new Date().getFullYear().toString() || "",
          email: values.email || "",
          link: link,
          website_email: process.env.NEXT_PUBLIC_SITE_URL || "",
          support_email: process.env.ADMIN_SUPPORT_EMAIL || "",
          support_phone: process.env.ADMIN_SUPPORT_PHONE || "",
        };

        const replacedHtml = replaceVariables(emailTemplate.code, emailValues);
        
        if (!replacedHtml.success) {
          throw new Error(replacedHtml.result);
        }

        const emailResult = await sendEmail({
          to: values.email,
          subject: "Потвърждение на имейл",
          html: replacedHtml.result,
          allowReply: false,
        });

        if (emailResult.error) {
          throw new Error(emailResult.error);
        }

        return createdUser;
      }) };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Грешка при регистрация на потребител");
  }
};
