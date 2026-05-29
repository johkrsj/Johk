"use client";
import { useState } from "react";

const POSTS = [
  { id: 1, user: { name: "سارة", handle: "sara_art", avatar: "S", color: "#888" }, image: "https://picsum.photos/seed/art1/600/600", caption: "Beautiful moment 🌸", likes: 142, liked: false },
  { id: 2, user: { name: "خالد", handle: "khalid.ph", avatar: "K", color: "#666" }, image: "https://picsum.photos/seed/city2/600/600", caption: "Riyadh at night 🌆", likes: 389, liked: true },
  { id: 3, user: { name: "نورة", handle: "noura_food", avatar: "N", color: "#999" }, image: "https://picsum.photos/seed/food3/600/600", caption: "Lunch today 😋", likes: 76, liked: false },
];

function Feed({ posts, toggleLike }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px" }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: post.user.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700 }}>{post.user.avatar}</div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{post.user.handle}</div>
          </div>
          <img src={post.image} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
          <div style={{ padding: "12px 16px" }}>
            <button onClick={() => toggleLike(post.id)} style={{ background: "none", border: "none", cursor: "pointer", color: post.liked ? "#ef4444" : "#aaa", fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
              {post.liked ? "❤️" : "🤍"} {post.likes}
            </button>
            <p style={{ fontSize: 14, margin: "8px 0 0" }}><strong>{post.user.handle}</strong> {post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Search() {
  return (
    <div style={{ padding: 16 }}>
      <input placeholder="Search..." style={{ width: "100%", padding: "12px 16px", background: "#3a3a3a", border: "none", borderRadius: 12, color: "#fff", fontSize: 15, boxSizing: "border-box" }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, marginTop: 16 }}>
        {["e1","e2","e3","e4","e5","e6"].map((s,i) => (
          <img key={i} src={`https://picsum.photos/seed/${s}/300/300`} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover" }} />
        ))}
      </div>
    </div>
  );
}

function AddPost() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh", gap: 20 }}>
      <div style={{ fontSize: 60 }}>📸</div>
      <p style={{ color: "#aaa", fontSize: 16 }}>Add a new post</p>
      <button style={{ padding: "14px 40px", background: "#fff", border: "none", borderRadius: 14, color: "#111", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>Choose Photo</button>
    </div>
  );
}

function Profile() {
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
      <button style={{ width: "100%", padding: "10px 0", background: "#3a3a3a", border: "none", borderRadius: 10, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Edit Profile</button>
    </div>
  );
}

export default function Home() {
  const [posts, setPosts] = useState(POSTS);
  const [page, setPage] = useState("feed");
  const toggleLike = (id) => setPosts(posts.map(p => p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p));

  const tabs = [
    { id: "feed", icon: "🏠" },
    { id: "search", icon: "🔍" },
    { id: "add", icon: "➕" },
    { id: "profile", icon: "👤" },
  ];

  return (
    <div style={{ background: "#2a2a2a", minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', sans-serif", direction: "ltr", maxWidth: 430, margin: "0 auto", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(42,42,42,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #3a3a3a", padding: "14px 16px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
        <span style={{ fontSize: 22, fontWeight: 800, color: "#ffffff" }}>Johk</span>
      </div>
      <div style={{ paddingBottom: 70 }}>
        {page === "feed" && <Feed posts={posts} toggleLike={toggleLike} />}
        {page === "search" && <Search />}
        {page === "add" && <AddPost />}
        {page === "profile" && <Profile />}
      </div>
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "rgba(30,30,30,0.97)", borderTop: "1px solid #3a3a3a", display: "flex", justifyContent: "space-around", padding: "10px 0 20px", zIndex: 100 }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setPage(t.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 24, opacity: page === t.id ? 1 : 0.4, transform: page === t.id ? "scale(1.2)" : "scale(1)", transition: "all 0.2s" }}>
            {t.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
