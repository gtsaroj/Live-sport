"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Calendar,
  ClubIcon as Football,
  LayoutDashboard,
  PlayCircle,
  PlusCircle,
  Settings,
  Trophy,
  Video,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface DashboardSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DashboardSidebar({ open, onOpenChange }: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r bg-background transition-transform lg:static lg:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Football className="h-6 w-6" />
          <span>All Live Sports</span>
        </Link>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => onOpenChange(false)}>
          <X className="h-5 w-5" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>
      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="flex flex-col gap-1">
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/" && "bg-accent text-accent-foreground",
            )}
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <div className="mt-4 px-3 text-xs font-medium text-muted-foreground">Content Management</div>
          <Link
            href="/dashboard/live-matches"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/dashboard/live-matches" && "bg-accent text-accent-foreground",
            )}
          >
            <PlayCircle className="h-5 w-5" />
            Live Matches
          </Link>
          <Link
            href="/dashboard/upcoming-matches"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/dashboard/upcoming-matches" && "bg-accent text-accent-foreground",
            )}
          >
            <Calendar className="h-5 w-5" />
            Upcoming Matches
          </Link>
          <Link
            href="/dashboard/highlights"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/dashboard/highlights" && "bg-accent text-accent-foreground",
            )}
          >
            <Video className="h-5 w-5" />
            Highlights
          </Link>
          <Link
            href="/dashboard/ad-banners"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/dashboard/ad-banners" && "bg-accent text-accent-foreground",
            )}
          >
            <BarChart3 className="h-5 w-5" />
            Ad Banners
          </Link>
          <div className="mt-4 px-3 text-xs font-medium text-muted-foreground">Sports Categories</div>
          <Link
            href="/dashboard/football"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/dashboard/football" && "bg-accent text-accent-foreground",
            )}
          >
            <Football className="h-5 w-5" />
            Football
          </Link>
          <Link
            href="/dashboard/cricket"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/dashboard/cricket" && "bg-accent text-accent-foreground",
            )}
          >
            <Trophy className="h-5 w-5" />
            Cricket
          </Link>
          <Link
            href="/dashboard/basketball"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/dashboard/basketball" && "bg-accent text-accent-foreground",
            )}
          >
            <PlusCircle className="h-5 w-5" />
            Basketball
          </Link>
          <div className="mt-4 px-3 text-xs font-medium text-muted-foreground">Settings</div>
          <Link
            href="/dashboard/settings"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/dashboard/settings" && "bg-accent text-accent-foreground",
            )}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </ScrollArea>
    </div>
  )
}
