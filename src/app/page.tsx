import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SportsGrid } from "@/components/sports-grid"
import { AdBanner } from "@/components/ad-banner"
import { getAllMatches, getAdBanners } from "@/lib/data"

export default async function Home() {
  const matches = await getAllMatches()
  const adBanners = await getAdBanners()

  return (
    <main className="container mx-auto px-4 py-8">


      {adBanners.length > 0 && (
        <div className="mb-8">
          <AdBanner banner={adBanners[0]} />
        </div>
      )}

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">All Sports</TabsTrigger>
          <TabsTrigger value="football">Football</TabsTrigger>
          <TabsTrigger value="cricket">Cricket</TabsTrigger>
          <TabsTrigger value="basketball">Basketball</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <SportsGrid matches={matches} />
        </TabsContent>

        <TabsContent value="football">
          <SportsGrid matches={matches.filter((match) => match.category === "football")} />
        </TabsContent>

        <TabsContent value="cricket">
          <SportsGrid matches={matches.filter((match) => match.category === "cricket")} />
        </TabsContent>

        <TabsContent value="basketball">
          <SportsGrid matches={matches.filter((match) => match.category === "basketball")} />
        </TabsContent>
      </Tabs>
    </main>
  )
}
