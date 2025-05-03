import { LiveMatchForm } from "@/components/live-match-form"

export default function NewLiveMatchPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add Banner</h1>
        <p className="text-muted-foreground">Upload a banner</p>
      </div>
      <LiveMatchForm />
    </div>
  )
}
