"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.push("/auth");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      Welcome to Johk 🚀
    </div>
  );
}
<div
  style={{
    background: "#2a1800",
    border: "1px solid #f59e0b",
    color: "#fbbf24",
    padding: "12px",
    borderRadius: "12px",
    marginBottom: "20px",
    fontSize: "13px",
    lineHeight: "1.6",
  }}
>
  ⚠️ Johk is still new and under development.<br />
  Please do NOT use a password you use on important accounts.
</div>
