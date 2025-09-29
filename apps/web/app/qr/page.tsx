
"use client";
import { useEffect, useState } from "react";
import { nextTargetFor } from "@/lib/qr-redirect";

type State = "asking" | "ok" | "skip" | "error";

export default function QRHandler() {
  const [state, setState] = useState<State>("asking");

  useEffect(() => {
    const run = async () => {
      const url = new URL(window.location.href);
      const payload: any = {
        h: url.searchParams.get("h"),
        a: url.searchParams.get("a"),
        c: url.searchParams.get("c"),
        v: url.searchParams.get("v"),
        ref: document.referrer || null,
        ua: navigator.userAgent,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
        utm: Object.fromEntries([...url.searchParams.entries()].filter(([k]) => k.startsWith("utm_"))),
        loc: null,
        loc_accuracy: null,
        loc_consent: null,
      };

      const send = async () => {
        try {
          await fetch("/api/scan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          setState("ok");
        } catch {
          setState("error");
        } finally {
          const target = nextTargetFor({
            sku: payload.h || undefined,
            affiliate: payload.a || undefined,
            campaign: payload.c || undefined,
            utm: payload.utm || {},
          });
          // Avoid back button loop
          window.location.replace(target);
        }
      };

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            payload.loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            payload.loc_accuracy = pos.coords.accuracy;
            payload.loc_consent = true;
            void send();
          },
          () => {
            payload.loc_consent = false;
            void send();
          },
          { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
        );
      } else {
        payload.loc_consent = false;
        void send();
      }
    };
    run();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      {state === "asking" && <p className="text-sm text-white/80">Requesting location…</p>}
      {state === "ok" && <p className="text-sm text-white/80">Logged. Moving you on…</p>}
      {state === "skip" && <p className="text-sm text-white/80">Skipping location…</p>}
      {state === "error" && <p className="text-sm text-red-400">Couldn’t log scan. Carrying on.</p>}
    </main>
  );
}
