import { UpcomingMatchForm } from "@/components/upcoming-match-form"

export default function NewLiveMatchPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add Upcoming match</h1>
        <p className="text-muted-foreground">Upload uplcoming matches</p>
      </div>
      <UpcomingMatchForm />
    </div>
  )
}
