import Projects from "@/app/dashboard/projects";

export default async function SitemapDashboard() {
  return (
    <div className="flex-1 pr-3">
      <div className="h-14 flex flex-col ">
        <div className="flex space-x-2 p-3 items-end">
          <h1 className=" text-xl">Sitemap</h1>
          <span className="text-[#A0A0A0]">v1.0</span>
        </div>
        <div className="h-[1px] bg-[#2E2E2E]" />
      </div>
    </div>
  );
}
