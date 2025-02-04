import PageWrapper from "@/app/dashboard/_components/page-wrapper";
import ClientPage from "@/app/dashboard/(root)/client-page";
import { prisma } from "@/db/prisma";

export default async function Dashboard() {
  const [usersCount, emailTemplatesCount] = await Promise.all([
    await prisma.user.count(),
    await prisma.emailTemplate.count(),
  ]);

  return (
    <PageWrapper>
      <ClientPage
        usersCount={usersCount}
        emailTemplatesCount={emailTemplatesCount}
      />
    </PageWrapper>
  );
}
