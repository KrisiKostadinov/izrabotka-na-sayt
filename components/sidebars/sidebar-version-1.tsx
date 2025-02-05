import { ArrowRight, X } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DisplayLogo from "@/components/navbar/components/display-logo";
import { Separator } from "@/components/ui/separator";
import { NavbarLink } from "@/components/navbar/types";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ClientIcon } from "@/components/client-icon";

type SidebarProps = {
  open: boolean;
  navbarLinks: NavbarLink[];
  setOpen: (open: boolean) => void;
  isActive: (href: string) => boolean;
  position?: "left" | "right";
} & React.ComponentPropsWithoutRef<"aside">;

export default function Sidebar({
  open,
  setOpen,
  navbarLinks,
  isActive,
  position = "left",
}: SidebarProps) {
  const isLeft = position === "left";

  return (
    <aside>
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-screen bg-black/70 z-30 duration-200",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(!open)}
      />

      <div
        className={cn(
          "z-40 fixed top-0 bottom-0 bg-white w-2/3 transition-transform duration-200",
          isLeft ? "left-0" : "right-0",
          !open && (isLeft ? "-translate-x-full" : "translate-x-full")
        )}
      >
        <div className="py-4 px-5 flex justify-between items-center gap-3">
          <DisplayLogo />
          <Button variant="outline" size="icon" onClick={() => setOpen(!open)}>
            <X />
          </Button>
        </div>
        <Separator />
        <ul className="flex flex-col mt-3">
          {navbarLinks.map((navbarLink, index) => (
            <li key={index}>
              {navbarLink.children ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <Link
                      className={cn(
                        "px-5 py-2 hover:text-secondary hover:bg-primary w-full flex gap-3",
                        isActive(navbarLink.href) && "text-secondary bg-primary"
                      )}
                      href={navbarLink.href}
                      title={navbarLink.name}
                    >
                      {navbarLink.icon && <ClientIcon name={navbarLink.icon} />}
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
                    "px-5 py-2 hover:text-secondary hover:bg-primary w-full flex items-center gap-3",
                    isActive(navbarLink.href) && "text-secondary bg-primary"
                  )}
                  href={navbarLink.href}
                  title={navbarLink.name}
                  onClick={() => setOpen(!open)}
                >
                  {navbarLink.icon && <ClientIcon name={navbarLink.icon} />}
                  {navbarLink.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}