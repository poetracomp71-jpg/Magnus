"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ services: 0, portfolio: 0, customers: 0 });

  useEffect(() => {
    Promise.all([
      fetch("/api/admin?resource=services").then((r) => r.json()),
      fetch("/api/admin?resource=portfolio").then((r) => r.json()),
      fetch("/api/admin?resource=customers").then((r) => r.json()),
    ]).then(([services, portfolio, customers]) => {
      setStats({
        services: Array.isArray(services) ? services.length : 0,
        portfolio: Array.isArray(portfolio) ? portfolio.length : 0,
        customers: Array.isArray(customers) ? customers.length : 0,
      });
    });
  }, []);

  const cards = [
    { label: "Layanan", value: stats.services, icon: "⚡", color: "#80cbc4" },
    { label: "Portfolio", value: stats.portfolio, icon: "💼", color: "#80cbc4" },
    { label: "Klien", value: stats.customers, icon: "👥", color: "#ef7950" },
  ];

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", color: "#102638", fontFamily: "'Space Grotesk'" }}>Dashboard</h1>
      <p style={{ color: "#657789", marginBottom: "2rem" }}>Selamat datang di admin panel Magnus System</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        {cards.map((card) => (
          <div key={card.label} style={{
            background: "white", border: "1px solid #d9e1e9", borderRadius: "14px", padding: "1.5rem", boxShadow: "0 2px 8px #18355008",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <span style={{ fontSize: "2rem" }}>{card.icon}</span>
              <span style={{ fontSize: "2rem", fontWeight: 800, color: card.color, fontFamily: "'Space Grotesk'" }}>{card.value}</span>
            </div>
            <div style={{ color: "#657789", fontSize: "0.9rem" }}>{card.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
