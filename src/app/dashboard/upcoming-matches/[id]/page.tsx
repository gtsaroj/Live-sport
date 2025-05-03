/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ChevronLeft, Pencil } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data for demonstration
const getMockMatchById = (id: string) => {
  return {
    id,
    matchTime: "2023-05-10T15:00:00",
    venue: "Old Trafford",
    team: [
      { name: "Manchester United", image: "/placeholder.svg?height=50&width=50" },
      { name: "Liverpool", image: "/placeholder.svg?height=50&width=50" },
    ],
    createdAt: { _seconds: 1682956800, _nanoseconds: 0 },
    updatedAt: { _seconds: 1682956800, _nanoseconds: 0 },
  }
}

export default function ViewUpcomingMatchPage({ params }: { params: any }) {
  const match = getMockMatchById(params.id)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link href="/dashboard/upcoming-matches">
              <ChevronLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Upcoming Match Details</h1>
        </div>
        <Button asChild>
          <Link href={`/dashboard/upcoming-matches/edit/${match.id}`}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Match Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-muted-foreground">Venue</Label>
                <p className="text-lg font-medium">{match.venue}</p>
              </div>
              <div>
                <Label className="text-muted-foreground">Match Time</Label>
                <p className="text-lg font-medium">{new Date(match.matchTime).toLocaleString()}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-muted-foreground">Created At</Label>
                <p className="text-lg font-medium">{new Date(match.createdAt._seconds * 1000).toLocaleString()}</p>
              </div>
              <div>
                <Label className="text-muted-foreground">Updated At</Label>
                <p className="text-lg font-medium">{new Date(match.updatedAt._seconds * 1000).toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {match.team.map((team, index) => (
                <div key={index} className="flex items-center gap-4 rounded-md border p-4">
                  <Image
                    src={team.image || "/placeholder.svg"}
                    alt={team.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-medium">{team.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
