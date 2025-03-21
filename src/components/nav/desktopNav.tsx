"use client";
import { useRouter } from "next/navigation";

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

export const DesktopNav = () => {
  const router = useRouter();
  return (
    <div className=" w-full sm:flex hidden  items-center justify-center sm:justify-between gap-5 px-5 py-3 bg-white ">
      <h1 className=" lg:text-[22px] font-semibold sm:font-normal text-[var(--foreground-color)] ">
        Live Sports
      </h1>
      <div className=" flex text-[var(--foreground-color)] items-center justify-start gap-[26px]  ">
        {navData?.map((data, index) => (
          <nav
            className="text-[18px] cursor-pointer group/item  "
            key={index}
            onClick={() => router.push(`${data?.path}`)}
          >
            {data.title}
            <p className="w-full h-[1.5px] duration-150 group-hover/item:translate-x-0 -translate-x-1 opacity-0 group-hover/item:opacity-100  bg-[var(--foreground-color)] "></p>
          </nav>
        ))}
      </div>
    </div>
  );
};
