"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-orange-glow flex justify-center items-center md:hidden">
      <button className="flex-1 py-4 text-orange-glow font-bold" onClick={()=>setOpen(!open)}>
        MENU
      </button>
    </nav>
  );
}
