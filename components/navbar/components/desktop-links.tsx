"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight, SearchIcon, UserIcon } from "lucide-react";
import { Session } from "next-auth";

import { NavbarLink } from "@/components/navbar/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import DisplayLogo from "@/components/navbar/components/display-logo";
import CustomIcon from "@/components/ui/custom-icon";

type DesktopLinksProps = {
  navbarLinks: NavbarLink[];
  session: Session | null;
} & React.ComponentPropsWithoutRef<"div">;

export default function DesktopLinks({
  navbarLinks,
  session,
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
              {navbarLink.children ? (
                <Popover>
                  <PopoverTrigger asChild>
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
                  </PopoverTrigger>

                  <PopoverContent className="bg-white p-4 rounded shadow-md space-y-2 w-full">
                    {navbarLink.children.map((child, index) => (
                      <Link
                        href={child.href}
                        key={index}
                        className={cn(
                          "flex gap-2 w-full justify-start py-2 px-4 rounded border hover:text-secondary hover:bg-primary duration-100",
                          isActive(child.href)
                            ? "text-secondary bg-primary"
                            : "bg-secondary text-primary"
                        )}
                      >
                        <ArrowRight />
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </PopoverContent>
                </Popover>
              ) : (
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
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-2">
        <CustomIcon tooltipContent="Вход в системата">
          <SearchIcon />
        </CustomIcon>
        <CustomIcon
          tooltipContent="Търсене в сайта"
          iconLink={session ? "/profile" : "/login"}
        >
          <UserIcon />
        </CustomIcon>
      </div>
    </div>
  );
}
