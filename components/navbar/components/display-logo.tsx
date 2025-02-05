"use client";

import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type DisplayLogoProps = {} & ComponentPropsWithoutRef<"a">;

export default function DisplayLogo({ ...props }: DisplayLogoProps) {
  const url = "/light.png";
  const WEBSITE_TITLE = process.env.NEXT_PUBLIC_WEBSITE_TITLE || "";

  return (
    <Link href={"/"} {...props} title={WEBSITE_TITLE}>
      <span className="text-2xl font-semibold">
        <Image
          src={url}
          alt={WEBSITE_TITLE}
          width={300}
          height={60}
          priority
          className="object-contain w-[140px] h-[40px]"
        />
      </span>
    </Link>
  );
}