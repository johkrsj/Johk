"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://tsugkcdrinfesplujzbp.supabase.co",
  "sb_publishable_8Y62Uzkr8W0RkLEsPWU9cA_gF7FgtuK"
);

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        window.location.href = "https://johk.vercel.app/auth";
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "https://johk.vercel.app/auth";
  };

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#121212", display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff", fontFamily: "sans-serif" }}>
        Loading Johk...
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "#ffffff", fontFamily: "sans-serif", padding: "40px 20px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#1e1e1e", borderRadius: "16px", padding: "30px", border: "1px solid #2d2d2d" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "10px" }}>Johk Profile</h1>
        <p style={{ color: "#8e8e93", marginBottom: "20px" }}>Welcome to your workspace</p>
        <div style={{ backgroundColor: "#141414", padding: "15px", borderRadius: "10px", marginBottom: "30px", border: "1px solid #2d2d2d" }}>
          <span style={{ display: "block", fontSize: "12px", color: "#8e8e93", marginBottom: "5px" }}>Email Address</span>
          <span style={{ fontSize: "16px", fontWeight: "500" }}>{user?.email}</span>
        </div>
        <button onClick={handleLogout} style={{ padding: "12px 24px", backgroundColor: "#ff453a", border: "none", borderRadius: "10px", color: "#ffffff", fontWeight: "600", cursor: "pointer" }}>
          Logout
        </button>
      </div>
    </div>
  );
}
