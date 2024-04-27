import { createClient } from "@/utils/supabase/server";
import React from "react";

export default async function Projects() {
  const supabase = createClient();
  const { data: project } = await supabase.from("Project").select();
  return <pre>{JSON.stringify(project, null, 2)}</pre>;
}
