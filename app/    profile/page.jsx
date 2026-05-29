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

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/auth";
  };

  if (!user) {
    return (
      <div
        style={{
          backgroundColor: "#1f1f1f",
          color: "#fff",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial",
          fontSize: "20px",
        }}
      >
        Loading
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#1f1f1f",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >
      {/* Header */}

      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          {user.user_metadata?.username || "Username"}
        </h1>

        <button
          onClick={logout}
          style={{
            backgroundColor: "#2a2a2a",
            border: "none",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* Profile Info */}

      <div
        style={{
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          {/* Avatar */}

          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              backgroundColor: "#e5e5e5",
            }}
          />

          {/* Name + Bio */}

          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "34px",
                fontWeight: "700",
              }}
            >
              Name
            </h2>

            <p
              style={{
                marginTop: "10px",
                color: "#d0d0d0",
                fontSize: "18px",
              }}
            >
              Bio
            </p>
          </div>
        </div>

        {/* Edit Button */}

        <button
          style={{
            marginTop: "30px",
            width: "100%",
            padding: "14px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#2a2a2a",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Edit Profile
        </button>
      </div>

      {/* Posts Grid */}

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "6px",
          padding: "6px",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            style={{
              aspectRatio: "1 / 1",
              overflow: "hidden",
              borderRadius: "22px",
              backgroundColor: "#2a2a2a",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Post"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
