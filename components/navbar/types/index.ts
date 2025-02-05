import * as LucideIcons from "lucide-react";

export type NavbarLink = {
  name: string;
  href: string;
  icon?: keyof typeof LucideIcons;
  children?: NavbarLink[];
};
