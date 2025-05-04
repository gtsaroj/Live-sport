'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { getSmartMatchTime } from "@/helpers";
import dayjs from "dayjs";
import { useState } from "react";
import { useEffect } from "react";

interface MatchInfoProps {
  match: any;
}

export function MatchInfo({ match }: MatchInfoProps) {
  const matchTime = getSmartMatchTime(match?.matchTime);
  const [isMatchNow, setIsMatchNow] = useState(false);

  useEffect(() => {
    const checkMatchTime = () => {
      const matchStartTime = dayjs(match?.matchTime);
      const matchEndTime = matchStartTime.add(2, 'hour'); // Assuming 2 hour match duration
      const now = dayjs();
      
      setIsMatchNow(now.isAfter(matchStartTime) && now.isBefore(matchEndTime));
    };

    // Check initially
    checkMatchTime();

    // Check every minute
    const timer = setInterval(checkMatchTime, 60000);

    return () => clearInterval(timer);
  }, [match?.matchTime]);

  return (
    <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
      <div className="bg-card rounded-lg sm:rounded-xl p-3 sm:p-6 dark:bg-card">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-1 flex-col items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-background p-1.5 sm:p-2 shadow-md transition-transform hover:scale-110 dark:bg-background">
                <Image
                  src={
                    match.team[0].image || "/placeholder.svg?height=80&width=80"
                  }
                  alt={match.team[0].name || "Home Team"}
                  fill
                  className="object-contain rounded-full p-1"
                />
              </div>
              <h3 className="mt-1.5 sm:mt-2 font-semibold text-sm sm:text-base text-center dark:text-white">
                {match.team[0].name ||
                  match.title?.split(" vs ")[0] ||
                  "Home Team"}
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center mx-2 sm:mx-8">
              <div className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 dark:text-white">
                VS
              </div>
              {/* {match.status === "live" && (
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 bg-muted px-2 sm:px-4 py-1 sm:py-2 rounded-lg dark:bg-muted">
                  <span className="text-xl sm:text-2xl font-bold dark:text-white">{match.team[1].goal || match.goal || 0}</span>
                  <span className="text-xs sm:text-sm font-medium dark:text-white">-</span>
                  <span className="text-xl sm:text-2xl font-bold dark:text-white">{match.team[1].goal || 0}</span>
                </div>
              )} */}
              {!isMatchNow && (
                <div className="text-xs sm:text-sm font-medium text-muted-foreground dark:text-muted-foreground">
                  {matchTime}
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-background p-1.5 sm:p-2 shadow-md transition-transform hover:scale-110 dark:bg-background">
                <Image
                  src={
                    match.team[1].image || "/placeholder.svg?height=80&width=80"
                  }
                  alt={match.team[1].name || "Away Team"}
                  fill
                  className="object-cover rounded-full p-1"
                />
              </div>
              <h3 className="mt-1.5 sm:mt-2 font-semibold text-sm sm:text-base text-center dark:text-white">
                {match.team[1].name ||
                  match.title?.split(" vs ")[1] ||
                  "Away Team"}
              </h3>
            </div>
          </div>

          {isMatchNow && (
            <div className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-red-500/10 text-red-500 text-xs sm:text-sm font-medium">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 mr-1.5 sm:mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-red-500"></span>
              </span>
              LIVE NOW
            </div>
          )}
        </div>
      </div>

      <h2 className="text-lg sm:text-xl font-semibold dark:text-white">
        Match Details
      </h2>
      <Separator />

      <div className="space-y-3 sm:space-y-4">
        {match.description && (
          <div>
            <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground">
              {match.description}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {match.venue && (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground dark:text-muted-foreground" />
              <span className="text-sm sm:text-base dark:text-white">
                {match.venue}
              </span>
            </div>
          )}

          {matchTime && (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground dark:text-muted-foreground" />
              <span className="text-sm sm:text-base dark:text-white">
                {matchTime}
              </span>
            </div>
          )}
        </div>

        {/* {match.status === "live" && match.goal !== undefined && (
          <div className="mt-3 sm:mt-4">
            <h3 className="font-medium text-sm sm:text-base mb-1 sm:mb-2 dark:text-white">Score</h3>
            <div className="text-xl sm:text-2xl font-bold dark:text-white">{match.goal}</div>
          </div>
        )} */}
      </div>
    </div>
  );
}
