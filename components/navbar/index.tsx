import { navbarLinks } from "@/components/navbar/data";
import DesktopLinks from "@/components/navbar/components/desktop-links";
import MobileLinks from "@/components/navbar/components/mobile-links";

export default function Navbar() {
  return (
    <div className="bg-white border h-16 max-sm:px-3">
      <DesktopLinks
        navbarLinks={navbarLinks}
        className="container mx-auto h-16 hidden lg:flex justify-between items-center"
      />
      <MobileLinks
        navbarLinks={navbarLinks}
        className="container mx-auto h-16 flex lg:hidden justify-between items-center"
      />
    </div>
  );
}
