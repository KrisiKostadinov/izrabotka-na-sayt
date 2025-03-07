"use client";

import { JSX, SVGProps, useState } from "react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              <div className="grid gap-2 py-6">
                <Link
                  href="/dashboard"
                  className="flex w-full items-center py-2 text-lg font-semibold hover:bg-slate-100 px-5 rounded"
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                >
                  Табло
                </Link>
                <Link
                  href="/dashboard/users"
                  className="flex w-full items-center py-2 text-lg font-semibold hover:bg-slate-100 px-5 rounded"
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                >
                  Потребители
                </Link>
                <Link
                  href="/dashboard/email-templates"
                  className="flex w-full items-center py-2 text-lg font-semibold hover:bg-slate-100 px-5 rounded"
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                >
                  Имейл темплейти
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Link href="/" prefetch={false} className="flex items-center gap-2 text-xl font-semibold">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
        <span>Админ</span>
      </Link>

      <nav className="ml-auto hidden lg:flex">
        <Link
          href="/dashboard"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Табло
        </Link>
        <Link
          href="/dashboard/users"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Потребители
        </Link>
        <Link
          href="/dashboard/email-templates"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Имейл темплейти
        </Link>
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

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
