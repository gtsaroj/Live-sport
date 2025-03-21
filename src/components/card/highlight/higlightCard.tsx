"use client";
import { OptimizeImg } from "@/helpers";
import { icons } from "@/utils";

export const HightlightCard: React.FC<Model.highlight> = (data) => {
  return (
    <a
      href={data.adLink ?? data?.matchLink}
      target="_blank"
      className="sm:min-w-[300px] min-w-[230px]  group/cursor relative h-full flex flex-col items-start justify-start gap-2 "
    >
      <div className="size-full">
        <OptimizeImg
          highResSrc={data?.image as string}
          alt={data?.title}
          className=" size-full max-h-[200px] rounded-md "
        />
      </div>
      <p className=" text-sm line-clamp-2  text-[var(--secondary-foreground)]  ">
        {data?.description}
      </p>
      <button className=" absolute  group-hover/cursor:scale-105 scale-100    left-[43%] bottom-[48%]  flex items-center justify-center backdrop-blur-2xl p-3 rounded-full   ">
        <icons.play className="size-5 fill-white text-white" />
      </button>
    </a>
  );
};
