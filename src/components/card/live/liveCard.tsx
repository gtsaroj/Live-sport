"use client";

import { OptimizeImg } from "@/helpers";
import { icons } from "@/utils/";
import { useRouter } from "next/navigation";

import React from "react";

export const LiveCard: React.FC<Model.MatchType> = ({ match, title, id }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`live/${id}`)}
      key={id}
      className=" cursor-pointer sm:min-w-[300px] min-w-[230px] shadow  flex flex-col items-stretch justify-start gap-2 w-full bg-white rounded-lg p-2 "
    >
      <div className="flex border-b  pb-2 sm:pb-4 border-[var(--secondary-foreground)] items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <icons.football className=" size-5 sm:size-6" />
          <p className=" text-[12px] sm:text-[16px] ">{title} </p>
        </div>
        <p className="flex text-white  py-0.5 px-1 text-[12px] tracking-wide sm:text-sm rounded-full items-center justify-center bg-red-500 ">
          <icons.dot className="text-white size-4 sm:size-5 animate-pulse  " /> Live
        </p>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 sm:gap-8">
        {match?.map((game) => (
          <TeamCard match={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};
export const TeamCard = ({ match }: { match: Model.Match }) => {
  return (
    <div className=" w-full flex items-center justify-between px-2">
      <div className="flex items-center justify-start gap-2">
        <OptimizeImg
          className="size-8"
          highResSrc={"/assets" + match?.image}
          alt={match?.title}
        />
        <h1 className=" text-[14px] sm:text-[16px] ">{match.title}</h1>
      </div>
      <p className=" text-[10px] sm:text-[12px] ">{match.goal}</p>
    </div>
  );
};
