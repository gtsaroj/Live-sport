"use client"

import { useState } from "react"
import { Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
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
const mockLiveMatches = [
  {
    id: "1",
    title: "Manchester United vs Liverpool",
    matchLink: "https://example.com/stream1",
    adLink: "https://example.com/ad1",
    venue: "Old Trafford",
    matchTime: "2023-05-02T15:00:00",
    isViewed: true,
    createdAt: { _seconds: 1682956800, _nanoseconds: 0 },
    updatedAt: { _seconds: 1682956800, _nanoseconds: 0 },
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
  },
  {
    id: "2",
    title: "Barcelona vs Real Madrid",
    matchLink: "https://example.com/stream2",
    adLink: "https://example.com/ad2",
    venue: "Camp Nou",
    matchTime: "2023-05-02T20:00:00",
    isViewed: false,
    createdAt: { _seconds: 1682956800, _nanoseconds: 0 },
    updatedAt: { _seconds: 1682956800, _nanoseconds: 0 },
    match: [
      {
        id: "m3",
        title: "First Half",
        image: "/placeholder.svg?height=100&width=100",
        goal: 0,
      },
    ],
  },
  {
    id: "3",
    title: "LA Lakers vs Golden State Warriors",
    matchLink: "https://example.com/stream3",
    adLink: "https://example.com/ad3",
    venue: "Staples Center",
    matchTime: "2023-05-02T19:00:00",
    isViewed: true,
    createdAt: { _seconds: 1682956800, _nanoseconds: 0 },
    updatedAt: { _seconds: 1682956800, _nanoseconds: 0 },
    match: [
      {
        id: "m4",
        title: "First Quarter",
        image: "/placeholder.svg?height=100&width=100",
        goal: 24,
      },
      {
        id: "m5",
        title: "Second Quarter",
        image: "/placeholder.svg?height=100&width=100",
        goal: 18,
      },
    ],
  },
]

export function LiveMatchesTable() {
  const [matches, setMatches] = useState(mockLiveMatches)
  const [viewMatch, setViewMatch] = useState<(typeof mockLiveMatches)[0] | null>(null)
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
              <TableHead>Match</TableHead>
              <TableHead>Venue</TableHead>
              <TableHead>Match Time</TableHead>
              <TableHead>Viewed</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {matches.length > 0 ? (
              matches.map((match) => (
                <TableRow key={match.id}>
                  <TableCell className="font-medium">{match.title}</TableCell>
                  <TableCell>{match.venue}</TableCell>
                  <TableCell>{new Date(match.matchTime).toLocaleString()}</TableCell>
                  <TableCell>
                    {match.isViewed ? (
                      <Badge variant="outline" className="bg-green-50 text-green-600">
                        Yes
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-red-50 text-red-600">
                        No
                      </Badge>
                    )}
                  </TableCell>
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
                          <Link href={`/dashboard/live-matches/edit/${match.id}`} className="flex items-center gap-2">
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
                <TableCell colSpan={6} className="h-24 text-center">
                  No live matches found.
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
              <DialogTitle>{viewMatch.title}</DialogTitle>
              <DialogDescription>Match details and streaming links</DialogDescription>
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
                <Label htmlFor="matchLink">Match Link</Label>
                <Input id="matchLink" value={viewMatch.matchLink} readOnly className="mt-1" />
              </div>
              <div>
                <Label htmlFor="adLink">Ad Link</Label>
                <Input id="adLink" value={viewMatch.adLink} readOnly className="mt-1" />
              </div>
              <div>
                <Label>Match Segments</Label>
                <div className="mt-2 space-y-2">
                  {viewMatch.match.map((segment) => (
                    <div key={segment.id} className="flex items-center gap-4 rounded-md border p-3">
                      <Image
                        src={segment.image || "/placeholder.svg"}
                        alt={segment.title}
                        width={48}
                        height={48}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <p className="font-medium">{segment.title}</p>
                        <p className="text-sm text-muted-foreground">Goals/Points: {segment.goal}</p>
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
              Are you sure you want to delete this match? This action cannot be undone.
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
