"use client";

export default function AddPost() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh", gap: 20 }}>
      <div style={{ fontSize: 60 }}>📸</div>
      <p style={{ color: "#aaa", fontSize: 16 }}>Add a new post</p>
      <button style={{ padding: "14px 40px", background: "#fff", border: "none", borderRadius: 14, color: "#111", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
        Choose Photo
      </button>
    </div>
  );
}
