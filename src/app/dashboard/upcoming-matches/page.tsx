import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { UpcomingMatchesTable } from "@/components/upcoming-matches-table"
import Link from "next/link"

export default function UpcomingMatchesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upcoming Matches</h1>
          <p className="text-muted-foreground">Manage all your upcoming match schedules</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/upcoming-matches/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Upcoming Match
          </Link>
        </Button>
      </div>
      <UpcomingMatchesTable />
    </div>
  )
}
