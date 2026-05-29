"use client";

export default function Home() {

  function OpenProfile() {
    window.location.href = "/profile";
  }

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "30px",
          letterSpacing: "-2px",
        }}
      >
        JOHK
      </h1>

      <button
        onClick={OpenProfile}
        style={{
          padding: "16px 34px",
          borderRadius: "18px",
          border: "none",
          backgroundColor: "white",
          color: "black",
          fontSize: "18px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Enter
      </button>
    </div>
  );
}
