"use client";

import { usePathname } from "next/navigation";
import { JSX, SVGProps, useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type NavbarProps = {
  session: Session | null;
};

export default function Navbar({ session }: NavbarProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <header className="bg-white shadow flex h-20 w-full shrink-0 justify-between items-center px-4 md:px-6">
      <Sheet open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
        <SheetContent className="p-0" side="left">
          <SheetHeader>
            <SheetTitle className="px-5 pt-5 text-left">Навигация</SheetTitle>
            <SheetDescription asChild>
              <nav className="grid gap-2 py-6">
                {!session ? (
                  <Link
                    href="/login"
                    className="flex w-full items-center py-2 text-lg font-semibold hover:bg-slate-100 px-5 rounded"
                    prefetch={false}
                    onClick={() => setIsOpen(false)}
                  >
                    Влизане
                  </Link>
                ) : (
                  <>
                    <Link
                      href="#"
                      className="flex w-full items-center py-2 text-lg font-semibold hover:bg-slate-100 px-5 rounded"
                      prefetch={false}
                      onClick={() => setIsOpen(false)}
                    >
                      {session.user?.email}
                    </Link>
                    <Link
                      href={"#"}
                      className="flex w-full items-center py-2 text-lg font-semibold hover:bg-slate-100 px-5 rounded"
                      prefetch={false}
                      onClick={() => signOut()}
                    >
                      Изход
                    </Link>
                  </>
                )}
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Link href="/" prefetch={false}>
        <Image
          src={"/logo.png"}
          alt="Госпожа Роза"
          width={40}
          height={40}
          priority
          className="w-[40px] h-[40px] object-cover"
        />
      </Link>

      <nav className="ml-auto hidden lg:flex">
        {!session ? (
          <Link
            href="/login"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Влизане
          </Link>
        ) : (
          <>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}
            >
              {session.user?.email}
            </Link>
            <Link
              href={"#"}
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}
              onClick={() => signOut()}
            >
              Изход
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}