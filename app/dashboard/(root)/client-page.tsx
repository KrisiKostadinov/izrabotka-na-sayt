"use client";

import Link from "next/link";

import PageHeader from "@/app/dashboard/_components/page-header";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

type ClientPageProps = {
  usersCount: number;
  emailTemplatesCount: number;
};

export default function ClientPage({
  usersCount,
  emailTemplatesCount,
}: ClientPageProps) {
  return (
    <>
      <PageHeader heading="Табло" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <DisplayItemBox
          title="Потребители"
          link="/dashboard/users"
          number={usersCount.toString()}
          description="Броят на всичките потребители на уеб сайта."
        />
        <DisplayItemBox
          title="Имейл темплейти"
          link="/dashboard/email-templates"
          number={emailTemplatesCount.toString()}
          description="Броят на всичките имейл темплейти на уеб сайта."
        />
      </div>
    </>
  );
}

type DisplayItemBoxProps = {
  title: string;
  link: string;
  number: string;
  description?: string;
};

const DisplayItemBox = ({
  title,
  link,
  number,
  description,
}: DisplayItemBoxProps) => {
  return (
    <Link href={link}>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <span className="text-xl">{title}</span>
            <h2 className="text-2xl">{number}</h2>
          </div>
          {description && (
            <CardDescription className="text-muted-foreground">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
};
