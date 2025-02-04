"use client";

import { ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AuthWrapperProps = {
  title: string;
  children: ReactNode;
};

export default function AuthWrapper({ title, children }: AuthWrapperProps) {
  return (
    <Card className="max-sm:mx-5 mt-5 sm:mt-10 sm:max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
