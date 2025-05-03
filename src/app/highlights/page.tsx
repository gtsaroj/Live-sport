import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { HighlightsTable } from "@/components/highlights-table"
import Link from "next/link"

export default function HighlightsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Highlights</h1>
          <p className="text-muted-foreground">Manage all your match highlights</p>
        </div>
        <Button asChild>
          <Link href="/highlights/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Highlight
          </Link>
        </Button>
      </div>
      <HighlightsTable />
    </div>
  )
}
