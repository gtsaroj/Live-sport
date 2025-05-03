"use client "
import { icons } from "@/utils";
import { useRouter } from "next/navigation";
import React from "react";

interface PaginationProps {
  totalData: number;
  perPage: number;
  currentPage: number;
  onChange: (page: number) => void;
  style?: React.CSSProperties;
  className?: string;
  navigateTo?: string;
  handlePageDirection: (pageDirection: "next" | "prev") => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalData,
  perPage = 5,
  currentPage = 1,
  onChange,
  className,
  style,
  navigateTo = "page",
  handlePageDirection,
}) => {
  const totalPages = Math.ceil(totalData / perPage);
  const router = useRouter();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onChange(page);
      router?.push(`?${navigateTo}=${page}`);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-end flex-nowrap py-[20px] px-[50px] ">
      <div className="flex items-center justify-center gap-4" style={style}>
        <div className="flex items-center justify-center w-full gap-2 ">
          <button
            disabled={currentPage === 1}
            className={`bg-[var(--light-background)]   ${
              currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
            } p-2 rounded hover:bg-[var(--dark-foreground)] hover:text-[var(--light-foreground)] duration-150`}
            onClick={() => {
              handlePageChange(currentPage - 1);
              handlePageDirection("prev");
            }}
          >
            <icons.chevronLeft />
          </button>
        </div>

        <div
          className={`flex items-center justify-center  gap-2 ${
            className ? className : ""
          }`}
        >
          <button className="px-3 bg-red-500 hover:bg-red-600 py-1 duration-150 rounded text-[var(--dark-text)] hover:text-[var(--dark-text)]  text-[18px] ">
            {currentPage}{" "}
          </button>{" "}
          <p className="  text-[18px]">of</p>
          <p className=" text-[18px]">{totalPages}</p>
        </div>

        <div className="flex items-center justify-center gap-5">
          <button
            className={`bg-[var(--light-background)] p-2 rounded hover:bg-[var(--dark-foreground)] hover:text-[var(--light-foreground)] duration-150 ${
              currentPage === totalPages
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() => {
              handlePageChange(currentPage + 1);
              handlePageDirection("next");
            }}
            disabled={currentPage === totalPages}
          >
            <icons.chevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
