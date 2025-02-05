"use client";

import { ComponentPropsWithoutRef, ReactNode } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

type CustomIconProps = {
  tooltipContent: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export default function CustomIcon({
  tooltipContent,
  children,
}: CustomIconProps) {
  return (
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
