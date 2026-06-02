"use client";

export default function ProfilePage() {
  return (
    <div 
      style={{ 
        minHeight: "100vh", 
        background: "#121212", 
        color: "#ffffff", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.5px" }}>
          Profile
        </h1>
        <p style={{ color: "#8e8e93", fontSize: 14, margin: 0 }}>
          Welcome to Johk platform
        </p>
      </div>
    </div>
  );
}
