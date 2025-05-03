"use client";

import { OptimizeImg } from "@/helpers";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

export const UpcomingCard: React.FC<Model.Upcoming> = (match) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`match/${match?.id}`)}
      className=" flex flex-col items-start justify-between  gap-5  sm:min-w-[300px] min-w-[230px] max-h-[200px]    p-2 rounded-md h-full   bg-gray-900 "
    >
      {/* Header */}
      <div className="flex w-full justify-between items-center">
        <span className="sm:text-sm text-[12px] sm:px-1 px-2 py-0.5 bg-green-600 p-0.5 rounded-2xl  text-white  ">
          {dayjs(match?.matchTime).format("MMM D, h:mm A") ||
            "March 20, 12:45 AM"}
        </span>
      </div>

      {/* Teams */}
      <div className="flex w-full items-center justify-between sm:justify-center gap-4 sm:gap-6">
        <div className="flex  w-1/2  gap-3 flex-col  justify-start  items-center">
          <OptimizeImg
            highResSrc={match?.team[0]?.image}
            alt={match?.team[0]?.name}
            className="md:size-16 size-8 object-cover  rounded-full  shadow-md"
          />
          <h1 className="md:text-lg line-clamp-1 sm:text-[16px] text-[12px] font-semibold text-gray-800 dark:text-gray-200">
            {match?.team[0]?.name}
          </h1>
        </div>

        <p className="text-xl font-bold text-gray-700 dark:text-white">VS</p>

        <div className="flex  w-1/2 gap-3  flex-col  justify-start  items-center">
          <OptimizeImg
            highResSrc={match?.team[1]?.image}
            alt={match?.team[1]?.name}
            className="md:size-16 size-8 object-cover  rounded-full  shadow-md"
          />
          <h1 className="md:text-lg line-clamp-1 sm:text-[16px] text-[12px] font-semibold text-gray-800 dark:text-gray-200">
            {match?.team[1]?.name}
          </h1>
        </div>
      </div>

      {/* Venue */}
      <p className="text-gray-500 line-clamp-1 w-full dark:text-gray-400 text-sm text-right italic">
        Venue: {match?.venue || "Bernabéu"}
      </p>
    </div>
  );
};
