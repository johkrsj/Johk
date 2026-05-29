"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/auth";
    } else {
      setUser(user);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/auth";
  };

  if (!user) {
    return (
      <div
        style={{
          background: "#000",
          color: "#fff",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 22,
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: 20,
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: 35 }}>
        Welcome, {user.user_metadata?.username || "User"}
      </h1>

      <p style={{ color: "#888" }}>
        Johk social platform is working 🚀
      </p>

      <div
        style={{
          marginTop: 30,
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => (window.location.href = "/profile")}
          style={btn}
        >
          Profile
        </button>

        <button
          onClick={() => (window.location.href = "/create")}
          style={btn}
        >
          Create Post
        </button>

        <button onClick={handleLogout} style={btn}>
          Logout
        </button>
      </div>

      <div
        style={{
          marginTop: 50,
          background: "#111",
          padding: 20,
          borderRadius: 20,
          border: "1px solid #222",
        }}
      >
        <h2>Feed</h2>

        <div
          style={{
            background: "#1a1a1a",
            padding: 16,
            borderRadius: 14,
            marginTop: 20,
          }}
        >
          <h3>@gojo</h3>
          <p>This is the first test post on Johk 🔥</p>
        </div>
      </div>
    </div>
  );
}

const btn = {
  background: "#fff",
  color: "#000",
  border: "none",
  padding: "12px 18px",
  borderRadius: 12,
  fontWeight: "bold",
  cursor: "pointer",
};
