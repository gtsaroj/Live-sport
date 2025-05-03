"use client";
import { PopUP } from "@/common";
import { UploadLive } from "@/feature/upload";
import { icons } from "@/utils";
import { useState } from "react";
export const CreateLive = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex text-white bg-[var(--primary-color)] items-center justify-start gap-2 px-4 py-3 rounded-md"
      >
        Create
        <icons.plus />
      </button>
      {open && (
        <PopUP close={open} closeModal={() => setOpen(!open)}>
          <UploadLive />
        </PopUP>
      )}
    </div>
  );
};
