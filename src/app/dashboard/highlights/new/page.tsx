import { HighlightForm } from "@/components/hightlight-match-formt"

export default function NewLiveMatchPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add Highlight Match</h1>
        <p className="text-muted-foreground">Upload a higlights matches</p>
      </div>
      <HighlightForm />
    </div>
  )
}
