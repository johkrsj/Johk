"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// الربط المباشر والصحيح بقاعدة البيانات ومفتاح الأمان الخاص بك
const supabase = createClient(
  "https://tsugkcdrinfesplujzbp.supabase.co",
  "Sb_publishable_8Y62Uzkr8W0RkLEsPWU9cA_gF7FgtuK"
);

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const validateUsername = (u) => /^[a-zA-Z0-9_.]+$/.test(u);

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage({ type: "error", text: "Enter email and password" });
      return;
    }

    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage({ type: "error", text: "Wrong email or password" });
    } else {
      window.location.href = "/profile";
    }
  };

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword || !username) {
      setMessage({ type: "error", text: "Fill all fields" });
      return;
    }

    if (username.length < 4) {
      setMessage({ type: "error", text: "Username must be at least 4 characters" });
      return;
    }

    if (!validateUsername(username)) {
      setMessage({ type: "error", text: "Username can only contain letters, numbers, underscores and dots" });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match" });
      return;
    }

    if (password.length < 6) {
      setMessage({ type: "error", text: "Password too short" });
      return;
    }

    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
      },
    });

    setLoading(false);

    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({
        type: "success",
        text: "Account created successfully. You can now login.",
      });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#121212",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: 16,
          padding: "40px 32px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#ffffff", marginBottom: 6, letterSpacing: "-0.5px" }}>
            Johk
          </div>
          <p style={{ color: "#8e8e93", fontSize: 14, margin: 0 }}>
            {mode === "login" ? "Welcome back" : "Create an account"}
          </p>
        </div>

        <div
          style={{
            background: "#1a140b",
            border: "1px solid #453214",
            color: "#d4a359",
            padding: "14px",
            borderRadius: "10px",
            marginBottom: "24px",
            fontSize: "13px",
            lineHeight: "1.5",
          }}
        >
          Johk is currently in active development. Please ensure you use a unique password for this platform.
        </div>

        <div style={{ display: "flex", background: "#141414", borderRadius: 8, padding: 4, marginBottom: 24 }}>
          {["login", "signup"].map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setMessage(null); }}
              style={{
                flex: 1,
                padding: "10px 0",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 13,
                background: mode === m ? "#2a2a2a" : "transparent",
                color: mode === m ? "#ffffff" : "#8e8e93",
              }}
            >
              {m === "login" ? "Login" : "Sign up"}
            </button>
          ))}
        </div>

        {mode === "signup" && (
          <div style={{ marginBottom: 18 }}>
            <label style={{ display: "block", fontSize: 12, color: "#aeaeb2", marginBottom: 8, fontWeight: 500 }}>
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              style={{
                width: "100%",
                padding: "12px 14px",
                background: "#141414",
                border: `1px solid ${username && !validateUsername(username) ? "#ff453a" : username && username.length >= 4 && validateUsername(username) ? "#30d158" : "#2d2d2d"}`,
                borderRadius: 10,
                color: "#ffffff",
                fontSize: 14,
                boxSizing: "border-box",
              }}
            />
            <p style={{ fontSize: 11, color: "#636366", marginTop: 6 }}>
              Letters, numbers, underscores and dots only (minimum 4 characters)
            </p>
          </div>
        )}

        <div style={{ marginBottom: 18 }}>
          <label style={{ display: "block", fontSize: 12, color: "#aeaeb2", marginBottom: 8, fontWeight: 500 }}>
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            style={{
              width: "100%",
              padding: "12px 14px",
              background: "#141414",
              border: "1px solid #2d2d2d",
              borderRadius: 10,
              color: "#ffffff",
              fontSize: 14,
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={{ display: "block", fontSize: 12, color: "#aeaeb2", marginBottom: 8, fontWeight: 500 }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{
              width: "100%",
              padding: "12px 14px",
              background: "#141414",
              border: "1px solid #2d2d2d",
              borderRadius: 10,
              color: "#ffffff",
              fontSize: 14,
              boxSizing: "border-box",
            }}
          />
        </div>

        {mode === "signup" && (
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", fontSize: 12, color: "#aeaeb2", marginBottom: 8, fontWeight: 500 }}>
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: "100%",
                padding: "12px 14px",
                background: "#141414",
                border: `1px solid ${confirmPassword && confirmPassword !== password ? "#ff453a" : confirmPassword === password && confirmPassword ? "#30d158" : "#2d2d2d"}`,
                borderRadius: 10,
                color: "#ffffff",
                fontSize: 14,
                boxSizing: "border-box",
              }}
            />
          </div>
        )}

        {message && (
          <div
            style={{
              padding: "12px 14px",
              borderRadius: 10,
              marginBottom: 20,
              fontSize: 13,
              lineHeight: "1.4",
              background: message.type === "success" ? "#14251c" : "#2c1414",
              color: message.type === "success" ? "#30d158" : "#ff453a",
              border: `1px solid ${message.type === "success" ? "#1e3d2b" : "#441f1f"}`
            }}
          >
            {message.text}
          </div>
        )}

        <button
          onClick={mode === "login" ? handleLogin : handleSignup}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px 0",
            background: loading ? "#2d2d2d" : "#ffffff",
            border: "none",
            borderRadius: 10,
            color: loading ? "#8e8e93" : "#000000",
            fontSize: 14,
            fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Processing..." : mode === "login" ? "Login" : "Create Account"}
        </button>
      </div>
    </div>
  );
}
