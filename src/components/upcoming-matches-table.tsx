"use client"

import { useState } from "react"
import { Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"

// Mock data for demonstration
const mockUpcomingMatches = [
  {
    id: "1",
    matchTime: "2023-05-10T15:00:00",
    venue: "Old Trafford",
    team: [
      { name: "Manchester United", image: "/placeholder.svg?height=50&width=50" },
      { name: "Liverpool", image: "/placeholder.svg?height=50&width=50" },
    ],
    createdAt: { _seconds: 1682956800, _nanoseconds: 0 },
    updatedAt: { _seconds: 1682956800, _nanoseconds: 0 },
  },
  {
    id: "2",
    matchTime: "2023-05-12T20:00:00",
    venue: "Camp Nou",
    team: [
      { name: "Barcelona", image: "/placeholder.svg?height=50&width=50" },
      { name: "Real Madrid", image: "/placeholder.svg?height=50&width=50" },
    ],
    createdAt: { _seconds: 1682956800, _nanoseconds: 0 },
    updatedAt: { _seconds: 1682956800, _nanoseconds: 0 },
  },
  {
    id: "3",
    matchTime: "2023-05-15T19:00:00",
    venue: "Staples Center",
    team: [
      { name: "LA Lakers", image: "/placeholder.svg?height=50&width=50" },
      { name: "Golden State Warriors", image: "/placeholder.svg?height=50&width=50" },
    ],
    createdAt: { _seconds: 1682956800, _nanoseconds: 0 },
    updatedAt: { _seconds: 1682956800, _nanoseconds: 0 },
  },
]

export function UpcomingMatchesTable() {
  const [matches, setMatches] = useState(mockUpcomingMatches)
  const [viewMatch, setViewMatch] = useState<(typeof mockUpcomingMatches)[0] | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [matchToDelete, setMatchToDelete] = useState<string | null>(null)

  const handleDelete = () => {
    if (matchToDelete) {
      setMatches(matches.filter((match) => match.id !== matchToDelete))
      setDeleteDialogOpen(false)
      setMatchToDelete(null)
    }
  }

  const confirmDelete = (id: string) => {
    setMatchToDelete(id)
    setDeleteDialogOpen(true)
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Teams</TableHead>
              <TableHead>Venue</TableHead>
              <TableHead>Match Time</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {matches.length > 0 ? (
              matches.map((match) => (
                <TableRow key={match.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={match.team[0].image || "/placeholder.svg"}
                          alt={match.team[0].name}
                          width={32}
                          height={32}
                          className="rounded-full object-cover"
                        />
                        <span>{match.team[0].name}</span>
                      </div>
                      <span className="mx-2">vs</span>
                      <div className="flex items-center gap-2">
                        <Image
                          src={match.team[1].image || "/placeholder.svg"}
                          alt={match.team[1].name}
                          width={32}
                          height={32}
                          className="rounded-full object-cover"
                        />
                        <span>{match.team[1].name}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{match.venue}</TableCell>
                  <TableCell>{new Date(match.matchTime).toLocaleString()}</TableCell>
                  <TableCell>{new Date(match.createdAt._seconds * 1000).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2" onClick={() => setViewMatch(match)}>
                          <Eye className="h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/upcoming-matches/edit/${match.id}`} className="flex items-center gap-2">
                            <Pencil className="h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="flex items-center gap-2 text-red-600"
                          onClick={() => confirmDelete(match.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No upcoming matches found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* View Match Dialog */}
      {viewMatch && (
        <Dialog open={!!viewMatch} onOpenChange={() => setViewMatch(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Upcoming Match Details</DialogTitle>
              <DialogDescription>Match schedule and team information</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="venue">Venue</Label>
                  <Input id="venue" value={viewMatch.venue} readOnly className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="matchTime">Match Time</Label>
                  <Input
                    id="matchTime"
                    value={new Date(viewMatch.matchTime).toLocaleString()}
                    readOnly
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label>Teams</Label>
                <div className="mt-2 space-y-2">
                  {viewMatch.team.map((team, index) => (
                    <div key={index} className="flex items-center gap-4 rounded-md border p-3">
                      <Image
                        src={team.image || "/placeholder.svg"}
                        alt={team.name}
                        width={48}
                        height={48}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <p className="font-medium">{team.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setViewMatch(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this upcoming match? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
