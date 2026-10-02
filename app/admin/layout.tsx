"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarItems = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/banners", label: "Banner Hero", icon: "🖼️" },
  { href: "/admin/services", label: "Layanan", icon: "⚡" },
  { href: "/admin/portfolio", label: "Portfolio", icon: "💼" },
  { href: "/admin/customers", label: "Klien", icon: "👥" },
  { href: "/admin/about", label: "Tentang Kami", icon: "ℹ️" },
  { href: "/admin/contact", label: "Kontak", icon: "📞" },
  { href: "/admin/cta", label: "CTA", icon: "📢" },
  { href: "/admin/footer", label: "Footer", icon: "📋" },
  { href: "/admin/profile", label: "Profil", icon: "🏢" },
  { href: "/admin/theme", label: "Tema & SEO", icon: "🎨" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f7f8" }}>
      <aside style={{
        width: collapsed ? "72px" : "240px",
        background: "white",
        borderRight: "1px solid #d9e1e9",
        padding: "1rem",
        transition: "width 0.3s ease",
        position: "fixed",
        top: 0,
        bottom: 0,
        overflowY: "auto",
        zIndex: 50,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem", padding: "0.5rem" }}>
          <div style={{
            width: "32px",
            height: "32px",
            minWidth: "32px",
            background: "#80cbc4",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            color: "white",
            fontSize: "0.85rem",
            transform: "skew(-10deg)",
          }}>
            M
          </div>
          {!collapsed && (
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#102638", fontFamily: "'Space Grotesk'" }}>Magnus</div>
              <div style={{ fontSize: "0.7rem", color: "#657789" }}>Admin Panel</div>
            </div>
          )}
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.6rem 0.75rem",
                  borderRadius: "10px",
                   color: isActive ? "#80cbc4" : "#657789",
                  background: isActive ? "#e0f2f1" : "transparent",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 600 : 400,
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                {!collapsed && item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ marginTop: "2rem", borderTop: "1px solid #d9e1e9", paddingTop: "1rem" }}>
          <Link href="/" target="_blank" style={{
            display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", borderRadius: "10px", color: "#657789", textDecoration: "none", fontSize: "0.9rem",
          }}>
            <span>🌐</span>
            {!collapsed && "Lihat Website"}
          </Link>
          <button onClick={async () => { await fetch("/api/auth/logout", { method: "POST" }); window.location.href = "/admin/login"; }} style={{
            display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", borderRadius: "10px", color: "#e53935", background: "transparent", border: "none", fontSize: "0.9rem", cursor: "pointer", width: "100%", textAlign: "left",
          }}>
            <span>🚪</span>
            {!collapsed && "Logout"}
          </button>
        </div>
      </aside>

      <main style={{
        flex: 1,
        marginLeft: collapsed ? "72px" : "240px",
        padding: "2rem",
        transition: "margin-left 0.3s ease",
      }}>
        <button onClick={() => setCollapsed(!collapsed)} style={{
          position: "fixed", top: "1rem", left: collapsed ? "80px" : "248px", background: "white", border: "1px solid #d9e1e9", color: "#657789", borderRadius: "8px", padding: "0.5rem", cursor: "pointer", zIndex: 51, transition: "left 0.3s ease", fontSize: "1rem",
        }}>
          {collapsed ? "→" : "←"}
        </button>
        {children}
      </main>
    </div>
  );
}
