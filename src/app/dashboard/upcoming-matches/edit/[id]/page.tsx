import { UpcomingMatchForm } from "@/components/upcoming-match-form"

// Mock data for demonstration
const getMockMatchById = (id: string) => {
  return {
    id,
    matchTime: "2023-05-10T15:00:00",
    venue: "Old Trafford",
    team: [
      { id: "t1", name: "Manchester United", image: "/placeholder.svg?height=50&width=50" },
      { id: "t2", name: "Liverpool", image: "/placeholder.svg?height=50&width=50" },
    ],
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EditUpcomingMatchPage({ params }: { params: any }) {
  const matchData = getMockMatchById(params.id)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Upcoming Match</h1>
        <p className="text-muted-foreground">Update the upcoming match details</p>
      </div>
      <UpcomingMatchForm initialData={matchData} />
    </div>
  )
}
