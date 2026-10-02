"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        setError("Password salah!");
      }
    } catch {
      setError("Terjadi kesalahan");
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#e8edf1",
      padding: "2rem",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "420px",
        background: "white",
        border: "1px solid #d9e1e9",
        borderRadius: "22px",
        padding: "2.5rem",
        boxShadow: "0 15px 60px #18355012",
      }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{
            width: "48px",
            height: "48px",
            background: "#80cbc4",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            color: "white",
            fontSize: "1.2rem",
            margin: "0 auto 1rem",
            transform: "skew(-10deg)",
          }}>
            M
          </div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: "#102638", fontFamily: "'Space Grotesk', sans-serif" }}>
            Magnus System
          </h1>
          <p style={{ color: "#657789", fontSize: "0.9rem" }}>Admin Panel — Putra Comp</p>
        </div>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.5rem", fontWeight: 600 }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "#f5f7f8",
                border: "1px solid #d9e1e9",
                borderRadius: "10px",
                color: "#102638",
                fontSize: "0.95rem",
                outline: "none",
              }}
              required
            />
          </div>
          {error && (
            <p style={{ color: "#e53935", fontSize: "0.85rem", marginBottom: "1rem" }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "#0a1628",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              opacity: loading ? 0.7 : 1,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {loading ? "Masuk..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}
