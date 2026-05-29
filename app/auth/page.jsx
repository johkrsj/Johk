"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
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
    if (!email || !password) { setMessage({ type: "error", text: "⚠️ Enter email and password" }); return; }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    emailRedirectTo: "https://johk.vercel.app",
    data: { username }
  }
});  email, password });
    setLoading(false);
    if (error) setMessage({ type: "error", text: "❌ Wrong email or password" });
    else window.location.href = '/';
  };

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword || !username) { setMessage({ type: "error", text: "⚠️ Fill all fields" }); return; }
    if (username.length < 4) { setMessage({ type: "error", text: "❌ Username must be at least 4 characters" }); return; }
    if (!validateUsername(username)) { setMessage({ type: "error", text: "❌ Username can only contain letters, numbers, _ and ." }); return; }
    if (password !== confirmPassword) { setMessage({ type: "error", text: "❌ Passwords don't match" }); return; }
    if (password.length < 6) { setMessage({ type: "error", text: "❌ Password too short" }); return; }
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { username } } });
    setLoading(false);
    if (error) setMessage({ type: "error", text: "❌ " + error.message });
    else setMessage({ type: "success", text: "✅ Account created! Check your email" });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#2a2a2a", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif", padding: 20 }}>
      <div style={{ width: "100%", maxWidth: 420, background: "#1a1a1a", border: "1px solid #333", borderRadius: 20, padding: "36px 28px" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 6 }}>Johk</div>
          <p style={{ color: "#666", fontSize: 14, margin: 0 }}>{mode === "login" ? "Welcome back 👋" : "Join us 🚀"}</p>
        </div>
        <div style={{ display: "flex", background: "#111", borderRadius: 12, padding: 4, marginBottom: 24 }}>
          {["login", "signup"].map(m => (
            <button key={m} onClick={() => { setMode(m); setMessage(null); }} style={{ flex: 1, padding: "9px 0", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 14, background: mode === m ? "#fff" : "transparent", color: mode === m ? "#111" : "#666" }}>
              {m === "login" ? "Login" : "Sign up"}
            </button>
          ))}
        </div>
        {mode === "signup" && (
          <>
            <div style={{ background: "#1a1000", border: "1px solid #f97316aa", borderRadius: 12, padding: "12px 14px", marginBottom: 20, fontSize: 13, color: "#fbbf24" }}>
              🔐 Choose a strong password you haven't used elsewhere
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, color: "#aaa", marginBottom: 8 }}>Username</label>
              <input value={username} onChange={e => setUsername(e.target.value)} placeholder="john_doe" style={{ width: "100%", padding: "13px 16px", background: "#111", border: `1px solid ${username && !validateUsername(username) ? "#ef4444" : username && username.length >= 4 && validateUsername(username) ? "#22c55e" : "#333"}`, borderRadius: 12, color: "#fff", fontSize: 15, boxSizing: "border-box" }} />
              <p style={{ fontSize: 11, color: "#666", marginTop: 4 }}>Letters, numbers, _ and . only — min 4 characters</p>
            </div>
          </>
        )}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 13, color: "#aaa", marginBottom: 8 }}>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@gmail.com" style={{ width: "100%", padding: "13px 16px", background: "#111", border: "1px solid #333", borderRadius: 12, color: "#fff", fontSize: 15, boxSizing: "border-box" }} />
        </div>
        <div style={{ marginBottom: mode === "signup" ? 16 : 20 }}>
          <label style={{ display: "block", fontSize: 13, color: "#aaa", marginBottom: 8 }}>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" style={{ width: "100%", padding: "13px 16px", background: "#111", border: "1px solid #333", borderRadius: 12, color: "#fff", fontSize: 15, boxSizing: "border-box" }} />
        </div>
        {mode === "signup" && (
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, color: "#aaa", marginBottom: 8 }}>Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="••••••••" style={{ width: "100%", padding: "13px 16px", background: "#111", border: `1px solid ${confirmPassword && confirmPassword !== password ? "#ef4444" : confirmPassword === password && confirmPassword ? "#22c55e" : "#333"}`, borderRadius: 12, color: "#fff", fontSize: 15, boxSizing: "border-box" }} />
          </div>
        )}
        {message && (
          <div style={{ padding: "12px 16px", borderRadius: 12, marginBottom: 16, fontSize: 14, background: message.type === "success" ? "#0f2a1a" : "#2a0f0f", color: message.type === "success" ? "#22c55e" : "#f87171" }}>
            {message.text}
          </div>
        )}
        <button onClick={mode === "login" ? handleLogin : handleSignup} disabled={loading} style={{ width: "100%", padding: "14px 0", background: loading ? "#333" : "#fff", border: "none", borderRadius: 14, color: "#111", fontSize: 16, fontWeight: 800, cursor: loading ? "not-allowed" : "pointer" }}>
          {loading ? "Loading..." : mode === "login" ? "Login →" : "Create Account →"}
        </button>
      </div>
    </div>
  );
}
