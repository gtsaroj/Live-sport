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
const mockAdBanners = [
  {
    id: "1",
    image: "/placeholder.svg?height=200&width=800",
    link: "https://example.com/ad1",
  },
  {
    id: "2",
    image: "/placeholder.svg?height=200&width=800",
    link: "https://example.com/ad2",
  },
  {
    id: "3",
    image: "/placeholder.svg?height=200&width=800",
    link: "https://example.com/ad3",
  },
]

export function AdBannersTable() {
  const [adBanners, setAdBanners] = useState(mockAdBanners)
  const [viewBanner, setViewBanner] = useState<(typeof mockAdBanners)[0] | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [bannerToDelete, setBannerToDelete] = useState<string | null>(null)

  const handleDelete = () => {
    if (bannerToDelete) {
      setAdBanners(adBanners.filter((banner) => banner.id !== bannerToDelete))
      setDeleteDialogOpen(false)
      setBannerToDelete(null)
    }
  }

  const confirmDelete = (id: string) => {
    setBannerToDelete(id)
    setDeleteDialogOpen(true)
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Link</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {adBanners.length > 0 ? (
              adBanners.map((banner) => (
                <TableRow key={banner.id}>
                  <TableCell className="font-medium">{banner.id}</TableCell>
                  <TableCell>
                    <Image
                      src={banner.image || "/placeholder.svg"}
                      alt={`Banner ${banner.id}`}
                      className="h-12 w-32 rounded-md object-cover"
                      width={128}
                      height={48}
                    />
                  </TableCell>
                  <TableCell>
                    <a
                      href={banner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {banner.link}
                    </a>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2" onClick={() => setViewBanner(banner)}>
                          <Eye className="h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/ad-banners/edit/${banner.id}`} className="flex items-center gap-2">
                            <Pencil className="h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="flex items-center gap-2 text-red-600"
                          onClick={() => confirmDelete(banner.id)}
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
                <TableCell colSpan={4} className="h-24 text-center">
                  No ad banners found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* View Banner Dialog */}
      {viewBanner && (
        <Dialog open={!!viewBanner} onOpenChange={() => setViewBanner(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Ad Banner Details</DialogTitle>
              <DialogDescription>View the banner image and link</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="w-full overflow-hidden rounded-md">
                <Image
                  src={viewBanner.image || "/placeholder.svg"}
                  alt={`Banner ${viewBanner.id}`}
                  className="h-auto w-full object-cover"
                  width={800}
                  height={200}
                />
              </div>
              <div>
                <Label htmlFor="link">Link</Label>
                <Input id="link" value={viewBanner.link} readOnly className="mt-1" />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setViewBanner(null)}>Close</Button>
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
              Are you sure you want to delete this ad banner? This action cannot be undone.
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
