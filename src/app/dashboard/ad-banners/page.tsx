import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { AdBannersTable } from "@/components/ad-banners-table"
import Link from "next/link"

export default function AdBannersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ad Banners</h1>
          <p className="text-muted-foreground">Manage all your advertisement banners</p>
        </div>
        <Button asChild>
          <Link href="/ad-banners/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Ad Banner
          </Link>
        </Button>
      </div>
      <AdBannersTable />
    </div>
  )
}
