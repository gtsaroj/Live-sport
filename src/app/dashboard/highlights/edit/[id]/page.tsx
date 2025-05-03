/* eslint-disable @typescript-eslint/no-explicit-any */


import { HighlightForm } from "@/components/highlight-form"

export default function EditHighlightPage({ params }: { params: any }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Highlight</h1>
        <p className="text-muted-foreground">Update the highlight with ID: {params.id}</p>
      </div>
      <HighlightForm />
    </div>
  )
}
