import { redirect } from "next/navigation";

export default function DashboardRoot() {
  // By default, direct /dashboard goes to /dashboard/overview
  redirect("/dashboard/overview");
  return null;
}