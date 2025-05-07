import { getMatchById, getRelatedMatches, getAdBanners } from "@/lib/data";
import { MatchPlayer } from "@/components/match-player";
import { MatchInfo } from "@/components/match-info";
import { MatchGrid } from "@/components/match-grid";
import { AdBanner } from "@/components/ad-banner";
import { notFound } from "next/navigation";

export default async function MatchPage({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) {
  const match = await getMatchById(params?.id);

  if (!match) {
    notFound();
  }

  const relatedMatches = await getRelatedMatches(match.category, params?.id);
  const adBanners = await getAdBanners();

  return (
    <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <h1 className="text-xl sm:text-2xl font-bold dark:text-white">{match.title}</h1>
          <div className="rounded-lg overflow-hidden">
            <MatchPlayer match={match} />
          </div>
          <MatchInfo match={match} />
        </div>

        <div className="lg:h-[calc(100vh-4rem)] lg:sticky lg:top-4 overflow-auto space-y-4 sm:space-y-8">
          {adBanners.length > 0 && (
            <div className="mb-4 sm:mb-8">
              <AdBanner banner={adBanners[0]} orientation="vertical" />
            </div>
          )}

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 dark:text-white">Related Matches</h2>
            <MatchGrid className="lg:grid-cols-1  " matches={relatedMatches} type="related" compact />
          </div>
        </div>
      </div>
    </main>
  );
}
