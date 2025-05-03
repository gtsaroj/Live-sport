"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FormWrapper } from "@/components/form-wrapper"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, Trash2 } from "lucide-react"

interface MatchSegment {
  id: string
  title: string
  image: string
  goal: number
}

interface LiveMatchFormProps {
  initialData?: {
    id?: string
    title: string
    venue: string
    matchTime: string
    matchLink: string
    adLink: string
    match: MatchSegment[]
  }
}

export function LiveMatchForm({ initialData }: LiveMatchFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    venue: initialData?.venue || "",
    matchTime: initialData?.matchTime || "",
    matchLink: initialData?.matchLink || "",
    adLink: initialData?.adLink || "",
  })

  const [matchSegments, setMatchSegments] = useState<MatchSegment[]>(
    initialData?.match || [
      {
        id: `segment-${Date.now()}`,
        title: "",
        image: "",
        goal: 0,
      },
    ],
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSegmentChange = (id: string, field: keyof MatchSegment, value: string | number) => {
    setMatchSegments((prev) => prev.map((segment) => (segment.id === id ? { ...segment, [field]: value } : segment)))
  }

  const addSegment = () => {
    setMatchSegments((prev) => [
      ...prev,
      {
        id: `segment-${Date.now()}`,
        title: "",
        image: "",
        goal: 0,
      },
    ])
  }

  const removeSegment = (id: string) => {
    if (matchSegments.length > 1) {
      setMatchSegments((prev) => prev.filter((segment) => segment.id !== id))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real application, you would send this data to your backend
      const submissionData = {
        ...formData,
        match: matchSegments,
        status: "live",
        isViewed: false,
        createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
        updatedAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
      }

      console.log("Submitting data:", submissionData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to live matches page
      router.push("/dashboard/live-matches")
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <FormWrapper
        title="Match Details"
        description="Enter the basic information about the match"
        onSubmit={handleSubmit}
        onCancel={() => router.push("/dashboard/live-matches")}
        isSubmitting={isSubmitting}
      >
        <div className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Match Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g. Manchester United vs Liverpool"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="venue">Venue</Label>
              <Input
                id="venue"
                name="venue"
                placeholder="e.g. Old Trafford"
                value={formData.venue}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="matchTime">Match Time</Label>
              <Input
                id="matchTime"
                name="matchTime"
                type="datetime-local"
                value={formData.matchTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sport">Sport Type</Label>
              <Select defaultValue="football">
                <SelectTrigger>
                  <SelectValue placeholder="Select sport type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="matchLink">Match Streaming Link</Label>
              <Input
                id="matchLink"
                name="matchLink"
                placeholder="https://example.com/stream"
                value={formData.matchLink}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="adLink">Advertisement Link</Label>
              <Input
                id="adLink"
                name="adLink"
                placeholder="https://example.com/ad"
                value={formData.adLink}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </FormWrapper>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Match Segments</CardTitle>
          <Button type="button" variant="outline" size="sm" onClick={addSegment}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Segment
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {matchSegments.map((segment, index) => (
              <div key={segment.id} className="rounded-lg border p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-medium">Segment {index + 1}</h4>
                  {matchSegments.length > 1 && (
                    <Button type="button" variant="ghost" size="sm" onClick={() => removeSegment(segment.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                      <span className="sr-only">Remove segment</span>
                    </Button>
                  )}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`segment-title-${segment.id}`}>Title</Label>
                    <Input
                      id={`segment-title-${segment.id}`}
                      placeholder="e.g. First Half"
                      value={segment.title}
                      onChange={(e) => handleSegmentChange(segment.id, "title", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`segment-goal-${segment.id}`}>Goals/Points</Label>
                    <Input
                      id={`segment-goal-${segment.id}`}
                      type="number"
                      min="0"
                      placeholder="0"
                      value={segment.goal}
                      onChange={(e) => handleSegmentChange(segment.id, "goal", Number.parseInt(e.target.value) || 0)}
                      required
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor={`segment-image-${segment.id}`}>Image URL</Label>
                    <Input
                      id={`segment-image-${segment.id}`}
                      placeholder="https://example.com/image.jpg"
                      value={segment.image}
                      onChange={(e) => handleSegmentChange(segment.id, "image", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
