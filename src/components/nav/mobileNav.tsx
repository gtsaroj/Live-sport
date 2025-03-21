"use client";
import { usePathname, useRouter } from "next/navigation";

const navData: {
  path: string;
  title: string;
}[] = [
  {
    path: "/",
    title: "Football",
  },
  {
    path: "/cricket",
    title: "Cricket",
  },
  {
    path: "/bascketball",
    title: "Basketball",
  },
  {
    path: "/hockey",
    title: "Hockey",
  },
  {
    path: "/about",
    title: "About Us",
  },
];
export const MobileNav = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="flex flex-col gap-5 p-2 sm:hidden  w-full items-center justify-center bg-white ">
      <h1 className=" border-b w-full pb-3 border-b-gray-200 text-lg text-center font-semibold sm:font-normal text-[var(--foreground-color)] ">
        Live Sports
      </h1>
      <div className="w-full flex overflow-auto items-center justify-start gap-5">
        {navData?.map((data, index) => (
          <button
            onClick={() => router.push(data?.path)}
            className={`min-w-[100px] font-semibold py-1.5 px-2 text-gray-700 ${
              pathName === data?.path
                ? "bg-red-500 text-white "
                : "bg-gray-300 "
            } rounded-md   flex items-center justify-center text-[14px] `}
            key={index}
          >
            {data.title}
          </button>
        ))}
      </div>
    </div>
  );
};
