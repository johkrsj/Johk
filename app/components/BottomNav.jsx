"use client";

const tabs = [
  { id: "feed", icon: "🏠" },
  { id: "search", icon: "🔍" },
  { id: "add", icon: "➕" },
  { id: "profile", icon: "👤" },
];

export default function BottomNav({ page, setPage }) {
  return (
    <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "rgba(30,30,30,0.97)", borderTop: "1px solid #3a3a3a", display: "flex", justifyContent: "space-around", padding: "10px 0 20px", zIndex: 100 }}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => setPage(t.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 24, opacity: page === t.id ? 1 : 0.4, transform: page === t.id ? "scale(1.2)" : "scale(1)", transition: "all 0.2s" }}>
          {t.icon}
        </button>
      ))}
    </div>
  );
}
