"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 border-b bg-white">
      <Link href="/" aria-label="Go to homepage">
        <span className="text-xl font-bold tracking-tight text-blue-700">
          AgencyFlow
        </span>
      </Link>
      {/* Future: add navigation, CTA, theme and auth controls here */}
    </nav>
  );
}