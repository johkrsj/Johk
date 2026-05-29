"use client";
import { useState } from "react";
import Feed from "./components/Feed";
import Search from "./components/Search";
import AddPost from "./components/AddPost";
import Profile from "./components/Profile";
import BottomNav from "./components/BottomNav";

export default function Home() {
  const [page, setPage] = useState("feed");

  return (
    <div style={{ background: "#2a2a2a", minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', sans-serif", direction: "ltr", maxWidth: 430, margin: "0 auto", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(42,42,42,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #3a3a3a", padding: "14px 16px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
        <span style={{ fontSize: 22, fontWeight: 800, color: "#ffffff" }}>Johk</span>
      </div>
      <div style={{ paddingBottom: 70 }}>
        {page === "feed" && <Feed />}
        {page === "search" && <Search />}
        {page === "add" && <AddPost />}
        {page === "profile" && <Profile />}
      </div>
      <BottomNav page={page} setPage={setPage} />
    </div>
  );
}
