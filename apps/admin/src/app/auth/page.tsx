"use client";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const onLogin = async () => {
    await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: "/dashboard" } });
    alert("Magic link sent. Check your inbox.");
  };
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <input className="px-3 py-2 rounded bg-white/10" placeholder="you@domain" value={email} onChange={e=>setEmail(e.target.value)} />
      <button className="px-4 py-2 rounded bg-white text-black" onClick={onLogin}>Send magic link</button>
    </main>
  )
}
