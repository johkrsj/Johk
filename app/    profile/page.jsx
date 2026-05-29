"use client";

export default function ProfilePage() {
  return (
    <div
      style={{
        backgroundColor: "#1f1f1f",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            backgroundColor: "#d9d9d9",
          }}
        />

        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "32px",
            }}
          >
            Username
          </h1>

          <p
            style={{
              color: "#b0b0b0",
              marginTop: "8px",
              fontSize: "18px",
            }}
          >
            Bio
          </p>
        </div>
      </div>

      <button
        style={{
          marginTop: "30px",
          width: "100%",
          padding: "14px",
          borderRadius: "18px",
          border: "none",
          backgroundColor: "#2a2a2a",
          color: "white",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Edit Profile
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "8px",
          marginTop: "30px",
        }}
      >
        {[1,2,3,4,5,6].map((item) => (
          <div
            key={item}
            style={{
              aspectRatio: "1 / 1",
              backgroundColor: "#2a2a2a",
              borderRadius: "22px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
