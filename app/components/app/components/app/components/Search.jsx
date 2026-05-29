"use client";

export default function Search() {
  return (
    <div style={{ padding: 16 }}>
      <input
        placeholder="Search..."
        style={{ width: "100%", padding: "12px 16px", background: "#3a3a3a", border: "none", borderRadius: 12, color: "#fff", fontSize: 15, boxSizing: "border-box" }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, marginTop: 16 }}>
        {["e1","e2","e3","e4","e5","e6"].map((s,i) => (
          <img key={i} src={`https://picsum.photos/seed/${s}/300/300`} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover" }} />
        ))}
      </div>
    </div>
  );
}
