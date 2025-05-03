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
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"

// Mock data for demonstration
const mockHighlights = [
  {
    id: "1",
    title: "Manchester United vs Liverpool - Best Moments",
    matchLink: "https://example.com/highlight1",
    image: "/placeholder.svg?height=200&width=300",
    adLink: "https://example.com/ad1",
    description: "Watch the best moments from the thrilling match between Manchester United and Liverpool.",
    isViewed: true,
    createdAt: { _seconds: 1682956800, _nanoseconds: 0 },
    updatedAt: { _seconds: 1682956800, _nanoseconds: 0 },
  },
  {
    id: "2",
    title: "Barcelona vs Real Madrid - El Clasico Highlights",
    matchLink: "https://example.com/highlight2",
    image: "/placeholder.svg?height=200&width=300",
    adLink: "https://example.com/ad2",
    description: "All goals and key moments from the latest El Clasico between Barcelona and Real Madrid.",
    isViewed: false,
    createdAt: { _seconds: 1682956800, _nanoseconds: 0 },
    updatedAt: { _seconds: 1682956800, _nanoseconds: 0 },
  },
  {
    id: "3",
    title: "LA Lakers vs Golden State Warriors - Game Highlights",
    matchLink: "https://example.com/highlight3",
    image: "/placeholder.svg?height=200&width=300",
    adLink: "https://example.com/ad3",
    description: "Check out the highlights from the NBA game between LA Lakers and Golden State Warriors.",
    isViewed: true,
    createdAt: { _seconds: 1682956800, _nanoseconds: 0 },
    updatedAt: { _seconds: 1682956800, _nanoseconds: 0 },
  },
]

export function HighlightsTable() {
  const [highlights, setHighlights] = useState(mockHighlights)
  const [viewHighlight, setViewHighlight] = useState<(typeof mockHighlights)[0] | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [highlightToDelete, setHighlightToDelete] = useState<string | null>(null)

  const handleDelete = () => {
    if (highlightToDelete) {
      setHighlights(highlights.filter((highlight) => highlight.id !== highlightToDelete))
      setDeleteDialogOpen(false)
      setHighlightToDelete(null)
    }
  }

  const confirmDelete = (id: string) => {
    setHighlightToDelete(id)
    setDeleteDialogOpen(true)
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Viewed</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {highlights.length > 0 ? (
              highlights.map((highlight) => (
                <TableRow key={highlight.id}>
                  <TableCell className="font-medium">{highlight.title}</TableCell>
                  <TableCell>
                    <Image
                      src={highlight.image || "/placeholder.svg"}
                      alt={highlight.title}
                      width={80}
                      height={48}
                      className="rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell>
                    {highlight.isViewed ? (
                      <Badge variant="outline" className="bg-green-50 text-green-600">
                        Yes
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-red-50 text-red-600">
                        No
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{new Date(highlight.createdAt._seconds * 1000).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          className="flex items-center gap-2"
                          onClick={() => setViewHighlight(highlight)}
                        >
                          <Eye className="h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/highlights/edit/${highlight.id}`} className="flex items-center gap-2">
                            <Pencil className="h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="flex items-center gap-2 text-red-600"
                          onClick={() => confirmDelete(highlight.id)}
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
                  No highlights found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* View Highlight Dialog */}
      {viewHighlight && (
        <Dialog open={!!viewHighlight} onOpenChange={() => setViewHighlight(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{viewHighlight.title}</DialogTitle>
              <DialogDescription>Highlight details and streaming links</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="aspect-video w-full overflow-hidden rounded-md">
                <Image
                  src={viewHighlight.image || "/placeholder.svg"}
                  alt={viewHighlight.title}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" value={viewHighlight.description} readOnly className="mt-1 h-24" />
              </div>
              <div>
                <Label htmlFor="matchLink">Match Link</Label>
                <Input id="matchLink" value={viewHighlight.matchLink} readOnly className="mt-1" />
              </div>
              <div>
                <Label htmlFor="adLink">Ad Link</Label>
                <Input id="adLink" value={viewHighlight.adLink} readOnly className="mt-1" />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setViewHighlight(null)}>Close</Button>
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
              Are you sure you want to delete this highlight? This action cannot be undone.
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
