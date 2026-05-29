"use client";
import { useState } from "react";

const POSTS = [
  { id: 1, user: { name: "سارة", handle: "sara_art", avatar: "S", color: "#888" }, image: "https://picsum.photos/seed/art1/600/600", caption: "Beautiful moment 🌸", likes: 142, comments: 18, time: "2 hours ago", liked: false },
  { id: 2, user: { name: "خالد", handle: "khalid.ph", avatar: "K", color: "#666" }, image: "https://picsum.photos/seed/city2/600/600", caption: "Riyadh at night 🌆", likes: 389, comments: 45, time: "4 hours ago", liked: true },
  { id: 3, user: { name: "نورة", handle: "noura_food", avatar: "N", color: "#999" }, image: "https://picsum.photos/seed/food3/600/600", caption: "Lunch today 😋", likes: 76, comments: 9, time: "6 hours ago", liked: false },
];

export default function Home() {
  const [posts, setPosts] = useState(POSTS);
  const toggleLike = (id) => setPosts(posts.map(p => p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p));

  return (
    <div style={{ background: "#2a2a2a", minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', sans-serif", direction: "ltr", maxWidth: 430, margin: "0 auto" }}>
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(42,42,42,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #3a3a3a", padding: "14px 16px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
        <span style={{ fontSize: 22, fontWeight: 800, color: "#ffffff" }}>Johk ⚡</span>
      </div>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px" }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: post.user.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700 }}>{post.user.avatar}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{post.user.handle}</div>
              <div style={{ fontSize: 11, color: "#aaa" }}>{post.user.name}</div>
            </div>
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
