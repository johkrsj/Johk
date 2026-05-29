"use client";

export default function HomePage() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#fff",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        Welcome, User
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#888",
          marginBottom: "40px",
        }}
      >
        Johk social platform is working
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "50px",
          flexWrap: "wrap",
        }}
      >
        <a href="/profile">
          <button
            style={{
              padding: "14px 28px",
              borderRadius: "16px",
              border: "none",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Profile
          </button>
        </a>

        <button
          style={{
            padding: "14px 28px",
            borderRadius: "16px",
            border: "none",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Create Post
        </button>

        <button
          style={{
            padding: "14px 28px",
            borderRadius: "16px",
            border: "none",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#0a0a0a",
          border: "1px solid #222",
          borderRadius: "30px",
          padding: "40px",
          maxWidth: "700px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "30px",
          }}
        >
          Feed
        </h2>

        <div
          style={{
            backgroundColor: "#111",
            padding: "40px",
            borderRadius: "24px",
          }}
        >
          <h3
            style={{
              fontSize: "38px",
              marginBottom: "24px",
            }}
          >
            @gojo
          </h3>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "1.8",
              color: "#ddd",
            }}
          >
            This is the first test post on Johk
          </p>
        </div>
      </div>
    </div>
  );
}
