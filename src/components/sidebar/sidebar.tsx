"use client";

import React from "react";
import { icons } from "@/utils";
import { useRouter } from "next/navigation";
import { OptimizeImg } from "@/helpers";

const routers: { title: string; icon: React.ReactNode; path: string }[] = [
  {
    title: "Upload Live",
    icon: <icons.live className="size-6" />,
    path: "upload-live/",
  },
  {
    title: "Upcoming Match",
    icon: <icons.upcoming className="size-6" />,
    path: "upload-upcoming-match/",
  },
  {
    title: "Highlight Match",
    icon: <icons.Highlight className="size-6" />,
    path: "upload-highlight-match/",
  },
];

export const Sidebar: React.FC = () => {
  const router = useRouter();
  return (
    <div className="  w-[300px] px-3 py-4  bg-gray-100 flex flex-col items-center justify-start h-full rounded ">
      <div className="flex flex-col justify-start w-full h-full gap-5 py-2  ">
        {/* College Logo Section */}
        <div className="flex items-center justify-center w-full py-3 ">
          <div className="items-center gap-2 cursor-pointer justify-start  w-full hidden xl:flex ">
            <OptimizeImg
              className=" xl:w-full rounded-full max-w-[60px]"
              highResSrc={
                "https://content.sportslogos.net/logos/6/231/full/795.png"
              }
              alt="bashers"
            />
            Sports
          </div>
        </div>

        {/* Actions Section */}
        <div className="flex items-start justify-start flex-grow h-full  ">
          <ul className="flex flex-col  text-[var(--dark-text)] items-start justify-start w-full gap-5">
            {routers?.map((data, index) => (
              <li
                onClick={() => router.push(`${data?.path}`)}
                key={index}
                className="flex items-center justify-start gap-5 cursor-pointer hover:bg-[#e8e8e8] dark:hover:bg-[#121b28]  w-full py-3 px-2 rounded duration-150  "
              >
                {data?.icon}
                <span>{data?.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// export const MobileSlider: React.FC = () => {
//   const [openMenu, setOpenMenu] = useState<boolean>(false);
//   const { display, setDisplay } = useThemeContext();
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [openNotification, setOpenNotification] = useState<boolean>(false);

//   const profileReference = useRef<HTMLDivElement>();
//   const notificationReference = useRef<HTMLDivElement>();
//   useEffect(() => {
//     const closeModal = (event: MouseEvent) => {
//       if (
//         profileReference.current &&
//         !profileReference.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//       if (
//         notificationReference.current &&
//         !notificationReference.current.contains(event.target as Node)
//       ) {
//         setOpenNotification(false);
//       }
//     };
//     if (isOpen || openNotification) {
//       document.addEventListener("mousedown", closeModal);
//     }

//     return () => {
//       document.removeEventListener("mousedown", closeModal);
//     };
//   }, [isOpen, openNotification]);
//   const reference = useRef<HTMLDivElement>(null);
//   const user = useSelector((state: RootState) => state.root.user.userInfo);
//   const navigate = useNavigate();

//   return (
//     <div className="relative flex items-center justify-between w-full px-4 lg:shadow-none">
//       <div className="flex items-center justify-center gap-4">
//         <div
//           onClick={() => navigate("/admin")}
//           className="w-[150px] cursor-pointer"
//         >
//           <img className="w-full h-full" src={collegeLogo} alt="" />
//         </div>
//       </div>
//       <div className="flex  items-center justify-around gap-3">
//         <button onClick={() => setOpenMenu(!openMenu)}>
//           {openMenu ? (
//             <X className="size-8 text-[var(--dark-text)] " />
//           ) : (
//             <Menu className="size-8 text-[var(--dark-text)] " />
//           )}
//         </button>
//         <div className="flex gap-5 items-center justify-start">
//           <label className="switch">
//             <input
//               checked={display === "dark" ? true : false}
//               onChange={(event: ChangeEvent<HTMLInputElement>) => {
//                 if (event.target.checked) {
//                   setDisplay("dark");
//                 } else {
//                   setDisplay("light");
//                 }
//               }}
//               type="checkbox"
//             />
//             <span className="slider"></span>
//           </label>
//           {user.role === "chef" && (
//             <div ref={notificationReference as any} className="relative">
//               <Bell
//                 onClick={() => setOpenNotification(!openNotification)}
//                 className="size-7 text-[var(--dark-text)] cursor-pointer "
//               />
//               <div
//                 className={`absolute w-[300px] z-30 duration-150 ${
//                   openNotification
//                     ? "visible opacity-100 -translate-y-0 "
//                     : "invisible opacity-0 translate-y-10"
//                 }   right-[4.7rem] top-8`}
//               >
//                 <NotificationPage isOpen={openNotification} />
//               </div>
//             </div>
//           )}
//           <div>
//             {user ? (
//               <div
//                 onClick={() => setIsOpen(!isOpen)}
//                 ref={profileReference as any}
//                 className=" relative  cursor-pointer  "
//               >
//                 {" "}
//                 <img
//                   src={user.avatar}
//                   className="w-10 hover:ring-[var(--dark-border)] hover:ring-4 duration-150 h-10 rounded-full"
//                   alt=""
//                 />
//                 <div
//                   className={`absolute duration-150 right-[-5px] top-12 ${
//                     isOpen
//                       ? "visible z-[1] opacity-100 translate-y-0"
//                       : "invisible -translate-y-2 opacity-0 z-[-1]"
//                   } `}
//                 >
//                   <Profile user={user} />
//                 </div>
//               </div>
//             ) : (
//               <User />
//             )}
//           </div>
//         </div>
//       </div>

//       <div
//         ref={reference as any}
//         className={`absolute w-[1300px] z-[100] duration-200  ${
//           openMenu ? "backdrop-blur-sm opacity-100 " : "blur-0 "
//         }   duration-150 top-[-11px] ${
//           openMenu ? "left-[-11px]" : "left-[-3000px]"
//         } `}
//       >
//         <DesktopSlider open={openMenu} closeFn={() => setOpenMenu(!openMenu)} />
//       </div>
//     </div>
//   );
// };
