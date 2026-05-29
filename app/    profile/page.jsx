"use client";

export default function ProfilePage() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
          }}
        />

        <div>
          <h1
            style={{
              fontSize: "32px",
              marginBottom: "10px",
            }}
          >
            @gojo
          </h1>

          <p
            style={{
              color: "#aaa",
            }}
          >
            Welcome to my Johk profile 
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div>
          <strong>12</strong>
          <p style={{ color: "#999" }}>Posts</p>
        </div>

        <div>
          <strong>530</strong>
          <p style={{ color: "#999" }}>Followers</p>
        </div>

        <div>
          <strong>120</strong>
          <p style={{ color: "#999" }}>Following</p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        <div
          style={{
            backgroundColor: "#111",
            height: "160px",
            borderRadius: "16px",
          }}
        />

        <div
          style={{
            backgroundColor: "#111",
            height: "160px",
            borderRadius: "16px",
          }}
        />

        <div
          style={{
            backgroundColor: "#111",
            height: "160px",
            borderRadius: "16px",
          }}
        />

        <div
          style={{
            backgroundColor: "#111",
            height: "160px",
            borderRadius: "16px",
          }}
        />
      </div>
    </div>
  );
}
