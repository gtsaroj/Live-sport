import { DesktopNav } from "./desktopNav";
import { MobileNav } from "./mobileNav";

export const Navbar = () => {
  return (
    <div className="w-full">
      <DesktopNav />
      <MobileNav />
    </div>
  );
};
