import logo from "@/assets/logo.svg";
import moodboard from "@/assets/drawing-mode.svg";
import sitemap from "@/assets/structure-04.svg";
import visual from "@/assets/view.svg";
import doc from "@/assets/doc.svg";
import settings from "@/assets/settings.svg";

import Image from "next/image";
import SideBarButton from "./SideBarButton";

export default function SideBar() {
  return (
    <div className="sticky top-0 left-0 space-y-4 flex flex-col justify-center items-center p-3 pt-4">
      <Image src={logo} alt="Logo" width={24} />

      <div className="h-[1px] w-full bg-[#2E2E2E]" />

      <div className="space-y-2">
        <SideBarButton icon={moodboard} alt="Moodboard" active={false} />
        <SideBarButton icon={sitemap} alt="Sitemap" active={true} />
        <SideBarButton icon={visual} alt="Visual Design" />
      </div>

      <div className="h-[1px] w-full bg-[#2E2E2E]" />

      <div className="space-y-2">
        <SideBarButton icon={settings} alt="Settings" />
        <SideBarButton icon={doc} alt="Documentation" />
      </div>
    </div>
  );
}
