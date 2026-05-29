"use client";

export default function HomePage() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "58px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Welcome, User
      </h1>

      <p
        style={{
          color: "#999",
          fontSize: "20px",
          marginBottom: "40px",
        }}
      >
        Johk social platform is working 🚀
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        <a href="/profile">
          <button
            style={{
              padding: "14px 24px",
              borderRadius: "14px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Profile
          </button>
        </a>

        <button
          style={{
            padding: "14px 24px",
            borderRadius: "14px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Create Post
        </button>

        <a href="/auth">
          <button
            style={{
              padding: "14px 24px",
              borderRadius: "14px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </a>
      </div>

      <div
        style={{
          backgroundColor: "#111",
          border: "1px solid #222",
          borderRadius: "24px",
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
            backgroundColor: "#181818",
            padding: "30px",
            borderRadius: "24px",
          }}
        >
          <h3
            style={{
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            @gojo
          </h3>

          <p
            style={{
              fontSize: "24px",
              color: "#eee",
            }}
          >
            This is the first test post on Johk 🔥
          </p>
        </div>
      </div>
    </div>
  );
}
