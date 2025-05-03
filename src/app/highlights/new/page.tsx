import { HighlightForm } from "@/components/highlight-form"

export default function NewHighlightPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add Highlight</h1>
        <p className="text-muted-foreground">Create a new match highlight entry</p>
      </div>
      <HighlightForm />
    </div>
  )
}
