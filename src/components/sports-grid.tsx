import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface SportGridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  matches: any[]
}

export function SportsGrid({ matches }: SportGridProps) {
  // Group matches by category
  const categories = ["football", "cricket", "basketball"]

  return (
    <div className="space-y-6 sm:space-y-12">
      {categories.map((category) => {
        const categoryMatches = matches.filter((match) => match.category === category)

        if (categoryMatches.length === 0) return null

        return (
          <div key={category} className="space-y-2 sm:space-y-4">
            <div className="flex items-center justify-between px-1 sm:px-0">
              <h2 className="text-lg sm:text-2xl dark:text-white font-bold capitalize">{category}</h2>
              <Link href={`/${category}`} className="text-[10px] sm:text-sm text-primary hover:underline">
                View all
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-4 px-1 sm:px-0">
              {categoryMatches.slice(0, 4).map((match) => (
                <Link prefetch href={`/match/${match.id}`} key={match.id}>
                  <Card className="overflow-hidden gap-2 sm:pb-6 pb-2 border rounded-lg pt-0 dark:border-gray-700 border-gray-300 h-full hover:shadow-lg transition-shadow">
                    <div className="relative size-full aspect-video">
                      <Image
                        src={match?.image || `/placeholder.svg?height=200&width=400`}
                        alt={match.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute text-white top-1 right-1 sm:top-2 sm:right-2">
                        <Badge variant={match.status === "live" ? "destructive" : "secondary"} className="text-[10px] sm:text-sm px-1.5 py-0.5 sm:px-2 sm:py-1">
                          {match.status === "live" ? "LIVE" : match.status === "upcoming" ? "UPCOMING" : "HIGHLIGHT"}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-1.5 sm:p-4">
                      <h3 className="font-semibold text-xs sm:text-base line-clamp-2">{match.title}</h3>
                      {match.venue && <p className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{match.venue}</p>}
                      {match.matchTime && <p className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{match.matchTime}</p>}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
