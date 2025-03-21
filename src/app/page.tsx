import { Carousel, HightlightCard, LiveCard, UpcomingCard } from "@/components";
import { live, highlight, upcoming, ads } from "@/data.json";
export default function Home() {
  return (
    <div className="w-full flex  flex-col items-center justify-start gap-5 sm:p-5 p-3">
      <Live />
      <Upcoming />
      <Banner />
      <Highlight />
    </div>
  );
}

const Live = () => {
  return (
    <div className="w-full flex flex-col gap-2 sm:gap-4 items-start justify-start ">
      <h1 className=" text-lg sm:text-[22px] font-semibold ">Live Match</h1>
      <div className="w-full flex pb-4 items-center overflow-auto justify-start gap-3">
        {live?.map((data) => (
          <LiveCard
            key={data.id}
            createdAt={data.createdAt}
            isViewed={data.isViewed}
            match={data.match}
            matchLink={data.matchLink}
            status={data.status as Common.GameStatus}
            title={data.title}
            updatedAt={data.updatedAt}
          />
        ))}
      </div>
    </div>
  );
};

const Upcoming = () => {
  return (
    <div className="w-full flex flex-col gap-2 sm:gap-4 items-start justify-start ">
      <h1 className=" sm:text-[22px] text-lg font-semibold ">Upcoming Match</h1>
      <div className="w-full flex  items-center overflow-auto justify-start gap-3">
        {upcoming?.map((data) => (
          <UpcomingCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="w-full sm:h-[300px] pb-6 h-[150px] md:h-[350px] ">
      <Carousel props={ads} time={3000} key={1} />
    </div>
  );
};

const Highlight = () => {
  return (
    <div className="w-full flex flex-col gap-2 sm:gap-4 items-start justify-start ">
      <h1 className=" text-lg sm:text-[22px] font-semibold ">Highlight Match</h1>
      <div className="w-full flex pb-4 items-center overflow-auto justify-start gap-3">
        {highlight?.map((data) => (
          <HightlightCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};
