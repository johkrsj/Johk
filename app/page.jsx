"use client";

import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://tsugkcdrinfesplujzbp.supabase.co",
  "sb_publishable_8Y62Uzkr8W0RkLEsPWU9cA_gF7FgtuK"
);

export default function Home() {
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        window.location.href = "https://johk.vercel.app/profile";
      } else {
        window.location.href = "https://johk.vercel.app/auth";
      }
    };
    checkUser();
  }, []);

  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px", margin: 0 }}>
          Johk
        </h1>
      </div>
    </div>
  );
}
