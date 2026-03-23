import SidebarNav from "@/components/dashboard/sidebar-nav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarNav />
      <main className="flex-1 flex flex-col px-6 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-blue-700 mb-2">Welcome to AgencyFlow</h1>
          <p className="text-gray-600 text-lg">
            Your agency command center for clients, projects, and teamwork.
          </p>
        </header>
        <section className="flex-1">{children}</section>
      </main>
    </div>
  );
}