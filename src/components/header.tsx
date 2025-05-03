import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import logo from "../../public/assets/alllivesports_logo.svg";

export function Header() {
  return (
    <header className="sticky justify-center flex  top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link prefetch href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="AllLiveSports"
              width={32}
              height={32}
              className="dark:text-white object-fill w-24  h-10"
            />
            <h1 className="text-lg -ml-16 dark:text-white text-black font-bold">AllLiveSports</h1>
          </Link>
        </div>

        <div className="hidden lg:flex justify-center items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link
              prefetch
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Home
            </Link>
            <Link
              prefetch
              href="/football"
              className="text-sm font-medium transition-colors hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Football
            </Link>
            <Link
              prefetch
              href="/cricket"
              className="text-sm font-medium transition-colors hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Cricket
            </Link>
            <Link
              prefetch
              href="/basketball"
              className="text-sm font-medium transition-colors hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Basketball
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex w-full max-w-sm items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground dark:text-white" />
            <Input
              type="search"
              placeholder="Search matches..."
              className="w-full rounded-md pl-8 md:w-[300px] lg:w-[300px] dark:text-white"
            />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
