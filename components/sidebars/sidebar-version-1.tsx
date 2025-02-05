import { X } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DisplayLogo from "@/components/navbar/components/display-logo";
import { Separator } from "@/components/ui/separator";

type SidebarProps = {
  open: boolean;
  navbarLinks: { href: string; name: string }[];
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
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
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
              <Link
                className={cn(
                  "px-5 py-2 hover:text-secondary hover:bg-primary block w-full",
                  isActive(navbarLink.href) && "text-secondary bg-primary"
                )}
                href={navbarLink.href}
                title={navbarLink.name}
                onClick={() => setOpen(!open)}
              >
                {navbarLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}