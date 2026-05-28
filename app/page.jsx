"use client";
import { useState } from "react";

const POSTS = [
  { id: 1, user: { name: "سارة", handle: "sara_art", avatar: "S", color: "#f97316" }, image: "https://picsum.photos/seed/art1/600/600", caption: "لحظة جميلة 🌸", likes: 142, comments: 18, time: "منذ ساعتين", liked: false },
  { id: 2, user: { name: "خالد", handle: "khalid.ph", avatar: "خ", color: "#8b5cf6" }, image: "https://picsum.photos/seed/city2/600/600", caption: "الرياض بالليل 🌆", likes: 389, comments: 45, time: "منذ 4 ساعات", liked: true },
  { id: 3, user: { name: "نورة", handle: "noura_food", avatar: "ن", color: "#ec4899" }, image: "https://picsum.photos/seed/food3/600/600", caption: "وجبة الغداء اليوم 😋", likes: 76, comments: 9, time: "منذ 6 ساعات", liked: false },
];

export default function Home() {
  const [posts, setPosts] = useState(POSTS);
  const toggleLike = (id) => setPosts(posts.map(p => p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p));

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', sans-serif", direction: "rtl", maxWidth: 430, margin: "0 auto" }}>
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1f1f1f", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 22, fontWeight: 800, background: "linear-gradient(135deg, #f97316, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>فلاش ⚡</span>
      </div>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px" }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: `linear-gradient(135deg, ${post.user.color}, #ec4899)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700 }}>{post.user.avatar}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{post.user.name}</div>
              <div style={{ fontSize: 11, color: "#666" }}>{post.time}</div>
            </div>
          </div>
          <img src={post.image} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
          <div style={{ padding: "12px 16px" }}>
            <button onClick={() => toggleLike(post.id)} style={{ background: "none", border: "none", cursor: "pointer", color: post.liked ? "#ef4444" : "#aaa", fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
              {post.liked ? "❤️" : "🤍"} {post.likes}
            </button>
            <p style={{ fontSize: 14, margin: "8px 0 0" }}><strong>{post.user.name}</strong> {post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
