"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Overview", href: "/dashboard/overview" },
  { name: "Clients", href: "/dashboard/clients" },
  { name: "Projects", href: "/dashboard/projects" },
  { name: "Team", href: "/dashboard/team" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function SidebarNav() {
  const pathname = usePathname();
  return (
    <nav className="w-64 h-screen bg-white border-r flex flex-col py-8 px-5">
      <div className="mb-10">
        <Link href="/dashboard">
          <span className="text-xl font-bold text-blue-700">AgencyFlow</span>
        </Link>
      </div>
      <ul className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`block px-3 py-2 rounded transition ${
                pathname === link.href
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "hover:bg-blue-50 text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}