import SitemapDashboard from "@/components/SitemapDashboard";
import SideBar from "@/components/SideBar";

export default async function Dashboard() {
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
