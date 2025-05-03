/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MatchGrid } from "@/components/match-grid"
import { AdBanner } from "@/components/ad-banner"
import { getMatchesByCategory, getAdBanners } from "@/lib/data"
import { notFound } from "next/navigation"

// interface CategoryPageProps {
//   params: {
//     category: string
//   }
// }

export default async function CategoryPage({ params }: { params: any }) {
  const { category } = params
  const validCategories = ["football", "cricket", "basketball"]

  if (!validCategories.includes(category)) {
    notFound()
  }

  const matches = await getMatchesByCategory(category)
  const adBanners = await getAdBanners()

  const liveMatches = matches.filter((match) => match.status === "live")
  const upcomingMatches = matches.filter((match) => match.status === "upcoming")
  const highlightMatches = matches.filter((match) => match.status === "highlight")

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl dark:text-white font-bold mb-6 capitalize">{category}</h1>

      {adBanners.length > 0 && (
        <div className="mb-8">
          <AdBanner banner={adBanners[0]} />
        </div>
      )}

      <Tabs defaultValue="live" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="live">Live Matches</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="highlights">Highlights</TabsTrigger>
        </TabsList>

        <TabsContent value="live">
          <MatchGrid matches={liveMatches} type="live" />
        </TabsContent>

        <TabsContent value="upcoming">
          <MatchGrid matches={upcomingMatches} type="upcoming" />
        </TabsContent>

        <TabsContent value="highlights">
          <MatchGrid matches={highlightMatches} type="highlight" />
        </TabsContent>
      </Tabs>
    </main>
  )
}
