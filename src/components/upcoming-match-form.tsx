"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, Trash2 } from "lucide-react"
import { FormWrapper } from "@/components/form-wrapper"

interface Team {
  id: string
  name: string
  image: string
}

interface UpcomingMatchFormProps {
  initialData?: {
    id?: string
    matchTime: string
    venue: string
    team: Team[]
  }
}

export function UpcomingMatchForm({ initialData }: UpcomingMatchFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    matchTime: initialData?.matchTime || "",
    venue: initialData?.venue || "",
  })
  const [teams, setTeams] = useState<Team[]>(
    initialData?.team || [
      {
        id: `team-${Date.now()}-1`,
        name: "",
        image: "",
      },
      {
        id: `team-${Date.now()}-2`,
        name: "",
        image: "",
      },
    ],
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTeamChange = (id: string, field: keyof Team, value: string) => {
    setTeams((prev) => prev.map((team) => (team.id === id ? { ...team, [field]: value } : team)))
  }

  const addTeam = () => {
    if (teams.length < 2) {
      setTeams((prev) => [
        ...prev,
        {
          id: `team-${Date.now()}`,
          name: "",
          image: "",
        },
      ])
    }
  }

  const removeTeam = (id: string) => {
    if (teams.length > 2) {
      setTeams((prev) => prev.filter((team) => team.id !== id))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real application, you would send this data to your backend
      const submissionData = {
        ...formData,
        team: teams,
        createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
        updatedAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
      }

      console.log("Submitting data:", submissionData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to upcoming matches page
      router.push("/dashboard/upcoming-matches")
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
        description="Enter the basic information about the upcoming match"
        onSubmit={handleSubmit}
        onCancel={() => router.push("/dashboard/upcoming-matches")}
        isSubmitting={isSubmitting}
      >
        <div className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
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
      </FormWrapper>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Teams</CardTitle>
          {teams.length < 2 && (
            <Button type="button" variant="outline" size="sm" onClick={addTeam}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Team
            </Button>
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teams.map((team, index) => (
              <div key={team.id} className="rounded-lg border p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-medium">Team {index + 1}</h4>
                  {teams.length > 2 && (
                    <Button type="button" variant="ghost" size="sm" onClick={() => removeTeam(team.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                      <span className="sr-only">Remove team</span>
                    </Button>
                  )}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`team-name-${team.id}`}>Team Name</Label>
                    <Input
                      id={`team-name-${team.id}`}
                      placeholder="e.g. Manchester United"
                      value={team.name}
                      onChange={(e) => handleTeamChange(team.id, "name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`team-image-${team.id}`}>Team Logo URL</Label>
                    <Input
                      id={`team-image-${team.id}`}
                      placeholder="https://example.com/logo.png"
                      value={team.image}
                      onChange={(e) => handleTeamChange(team.id, "image", e.target.value)}
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
