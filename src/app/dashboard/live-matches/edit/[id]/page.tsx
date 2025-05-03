/* eslint-disable @typescript-eslint/no-explicit-any */
import { LiveMatchForm } from "@/components/live-match-form"

// Mock data for demonstration
const getMockMatchById = (id: string) => {
  return {
    id,
    title: "Manchester United vs Liverpool",
    venue: "Old Trafford",
    matchTime: "2023-05-02T15:00:00",
    matchLink: "https://example.com/stream1",
    adLink: "https://example.com/ad1",
    match: [
      {
        id: "m1",
        title: "First Half",
        image: "/placeholder.svg?height=100&width=100",
        goal: 2,
      },
      {
        id: "m2",
        title: "Second Half",
        image: "/placeholder.svg?height=100&width=100",
        goal: 1,
      },
    ],
  }
}

export default function EditLiveMatchPage({ params }: { params: any }) {
  const matchData = getMockMatchById(params.id)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Live Match</h1>
        <p className="text-muted-foreground">Update the match details for {matchData.title}</p>
      </div>
      <LiveMatchForm initialData={matchData} />
    </div>
  )
}
