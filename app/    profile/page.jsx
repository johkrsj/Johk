"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/auth";
    } else {
      setUser(user);
    }
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
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid #222",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>
          @{user.user_metadata?.username || "user"}
        </h2>

        <button
          onClick={() => (window.location.href = "/")}
          style={{
            background: "#fff",
            color: "#000",
            border: "none",
            padding: "10px 14px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Home
        </button>
      </div>

      {/* Profile Info */}
      <div style={{ padding: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: "#222",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {user.user_metadata?.username?.[0]?.toUpperCase() || "U"}
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 20,
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>3</h3>
              <p style={{ color: "#888", margin: 0 }}>Posts</p>
            </div>

            <div>
              <h3 style={{ margin: 0 }}>120</h3>
              <p style={{ color: "#888", margin: 0 }}>Followers</p>
            </div>

            <div>
              <h3 style={{ margin: 0 }}>80</h3>
              <p style={{ color: "#888", margin: 0 }}>Following</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div style={{ marginTop: 20 }}>
          <h3 style={{ marginBottom: 5 }}>
            {user.user_metadata?.username || "user"}
          </h3>

          <p style={{ color: "#aaa", lineHeight: 1.6 }}>
            Welcome to my Johk profile 🚀
            <br />
            Future creator.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div
        style={{
          borderTop: "1px solid #222",
          padding: 10,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 6,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            style={{
              aspectRatio: "1/1",
              background: "#111",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#666",
              fontSize: 14,
            }}
          >
            Post {item}
          </div>
        ))}
      </div>
    </div>
  );
}
