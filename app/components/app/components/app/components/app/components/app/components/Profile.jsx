"use client";

export default function Profile() {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
        <div style={{ width: 70, height: 70, borderRadius: "50%", background: "#888", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 700 }}>Y</div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 18 }}>your_username</div>
          <div style={{ color: "#aaa", fontSize: 13, marginTop: 4 }}>Your Name</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 24, marginBottom: 20 }}>
        {[["0","Posts"],["0","Followers"],["0","Following"]].map(([n,l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 800, fontSize: 18 }}>{n}</div>
            <div style={{ fontSize: 12, color: "#aaa" }}>{l}</div>
          </div>
        ))}
      </div>
      <button style={{ width: "100%", padding: "10px 0", background: "#3a3a3a", border: "none", borderRadius: 10, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
        Edit Profile
        <button 
  onClick={() => window.location.href = '/auth'}
  style={{ width: "100%", padding: "10px 0", background: "#fff", border: "none", borderRadius: 10, color: "#111", fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 10 }}>
  Login / Sign up
</button>
      </button>
    </div>
  );
}
