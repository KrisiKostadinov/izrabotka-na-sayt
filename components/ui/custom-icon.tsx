"use client";

import { ComponentPropsWithoutRef, ReactNode } from "react";
import { useRouter } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

type CustomIconProps = {
  tooltipContent: string;
  iconLink?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export default function CustomIcon({
  tooltipContent,
  iconLink,
  children,
}: CustomIconProps) {
  const router = useRouter();

  const navigate = () => {
    if (iconLink) {
      router.push(iconLink);
    }
  }

  return iconLink ? (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" onClick={navigate}>
            <span>{children}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
  ) : (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <span>{children}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  );
}
