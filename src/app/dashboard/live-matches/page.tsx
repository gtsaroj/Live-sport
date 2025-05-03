import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { LiveMatchesTable } from "@/components/live-matches-table"
import Link from "next/link"

export default function LiveMatchesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Live Matches</h1>
          <p className="text-muted-foreground">Manage all your live match streams</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/live-matches/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Live Match
          </Link>
        </Button>
      </div>
      <LiveMatchesTable />
    </div>
  )
}
