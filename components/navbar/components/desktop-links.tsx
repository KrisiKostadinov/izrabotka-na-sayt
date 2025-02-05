"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { SearchIcon, UserIcon } from "lucide-react";

import { NavbarLink } from "@/components/navbar/types";
import { cn } from "@/lib/utils";
import DisplayLogo from "@/components/navbar/components/display-logo";
import CustomIcon from "@/components/ui/custom-icon";

type DesktopLinksProps = {
  navbarLinks: NavbarLink[];
} & React.ComponentPropsWithoutRef<"div">;

export default function DesktopLinks({
  navbarLinks,
  ...props
}: DesktopLinksProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div {...props}>
      <div className="flex items-center gap-3">
        <DisplayLogo />
      </div>
      <nav>
        <ul className="flex gap-1">
          {navbarLinks.map((navbarLink, index) => (
            <li key={index}>
              <Link
                className={cn(
                  "py-2 px-4 rounded hover:text-secondary hover:bg-primary",
                  isActive(navbarLink.href) && "text-secondary bg-primary"
                )}
                href={navbarLink.href}
                title={navbarLink.name}
              >
                {navbarLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-2">
        <CustomIcon tooltipContent="Търсене в сайта">
          <UserIcon />
        </CustomIcon>
        <CustomIcon tooltipContent="Вход в системата">
          <SearchIcon />
        </CustomIcon>
      </div>
    </div>
  );
}
