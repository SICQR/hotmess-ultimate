"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/radio", label: "Radio", icon: "📻" },
  { href: "/shows", label: "Shows", icon: "🎙️" },
  { href: "/hosts", label: "Hosts", icon: "👥" },
  { href: "/shop", label: "Shop", icon: "🛍️" },
  { href: "/membership", label: "Membership", icon: "⭐" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="md:hidden">
      <button 
        className="fixed bottom-4 right-4 z-50 bg-orange-500 text-white p-4 rounded-full shadow-lg"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>
      
      {open && (
        <div className="fixed inset-0 z-40 bg-black/95">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl text-white hover:text-orange-500 transition-colors"
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}