"use client";

import { PopUP } from "@/common";
import { Upload_UpcomingMatch } from "@/feature/upload/upload_UpcomingMatch";
import { icons } from "@/utils";
import { useState } from "react";

export const CreateUpcomingMatch = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full flex items-center justify-between">
   <button
           onClick={() => setOpen(!open)}
           className="flex text-white bg-[var(--primary-color)] items-center justify-start gap-2 px-4 py-3 rounded-md"
         >
           Create
           <icons.plus />
         </button>

      {open && (
        <PopUP close={open} closeModal={() => setOpen(!open)}>
          <Upload_UpcomingMatch />
        </PopUP>
      )}
    </div>
  );
};
