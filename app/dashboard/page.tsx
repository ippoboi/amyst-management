import SitemapDashboard from "@/components/SitemapDashboard";
import SideBar from "@/components/SideBar";
import { createClient } from "@/utils/supabase/server";

export default async function Dashboard() {
  const supabase = createClient();
  const { data: Project } = await supabase.from("Project").select();

  return (
    <div className="flex items-start space-x-3">
      <div className="flex items-start">
        <SideBar />
        <div className="w-[1px] h-screen bg-[#2E2E2E]" />
      </div>
      <SitemapDashboard />
    </div>
  );
}
