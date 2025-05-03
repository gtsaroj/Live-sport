"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const isMobile = useMobile();

  if (!isMobile) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden dark:text-white">
          <Menu className="h-5 w-5 dark:text-white" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="font-bold  mt-4 dark:text-white">AllLiveSports</span>
          </Link>
        </div>
        <div className="flex flex-col gap-3 mt-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block px-7 py-2 text-lg font-semibold hover:bg-accent dark:text-white"
          >
            Home
          </Link>
          <Link
            href="/football"
            onClick={() => setOpen(false)}
            className="block px-7 py-2 text-lg font-semibold hover:bg-accent dark:text-white"
          >
            Football
          </Link>
          <Link
            href="/cricket"
            onClick={() => setOpen(false)}
            className="block px-7 py-2 text-lg font-semibold hover:bg-accent dark:text-white"
          >
            Cricket
          </Link>
          <Link
            href="/basketball"
            onClick={() => setOpen(false)}
            className="block px-7 py-2 text-lg font-semibold hover:bg-accent dark:text-white"
          >
            Basketball
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
