"use client";

import { ComponentPropsWithoutRef, useState } from "react";
import { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { NavbarLink } from "@/components/navbar/types";
import { Button } from "@/components/ui/button";
import DisplayLogo from "@/components/navbar/components/display-logo";
import SidebarVersion1 from "@/components/sidebars/sidebar-version-1";
import CustomIcon from "@/components/ui/custom-icon";

type MobileNavbarProps = {
  navbarLinks: NavbarLink[];
} & ComponentPropsWithoutRef<"div">;

export default function MobileNavbar({
  navbarLinks,
  ...props
}: MobileNavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div {...props}>
      <div className="w-full block lg:hidden">
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </Button>
            <DisplayLogo />
          </div>
          <div className="flex gap-2">
            <CustomIcon tooltipContent="Търсене в сайта">
              <UserIcon />
            </CustomIcon>
            <CustomIcon tooltipContent="Вход в системата">
              <SearchIcon />
            </CustomIcon>
          </div>
        </div>
      </div>

      <SidebarVersion1
        open={open}
        setOpen={setOpen}
        navbarLinks={navbarLinks}
        isActive={isActive}
        position="left"
      />
    </div>
  );
}