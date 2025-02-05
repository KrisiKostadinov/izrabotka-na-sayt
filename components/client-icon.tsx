"use client";

import * as LucideIcons from "lucide-react";

export interface ClientIconProps {
  name: string;
  className?: string;
}

export function ClientIcon({ name, className }: ClientIconProps) {
  const LucideIcon = (LucideIcons as any)[name] || LucideIcons.HelpCircle;

  return <LucideIcon className={className || "w-6 h-6"} />;
}