"use client";

import { useEffect, useState } from "react";
import ImageUpload from "@/components/ImageUpload";

interface PortfolioItem {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  category: string | null;
  link: string | null;
  sortOrder: number;
  active: boolean;
}

export default function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [editing, setEditing] = useState<PortfolioItem | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", image: "", category: "", link: "", sortOrder: 0, active: true });

  const load = () => fetch("/api/admin?resource=portfolio").then((r) => r.json()).then(setItems);
  useEffect(() => { load(); }, []);

  const handleSave = async () => {
    if (editing) {
      await fetch(`/api/admin/portfolio/${editing.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ resource: "portfolio", data: form }) });
    }
    setShowModal(false); setEditing(null);
    setForm({ title: "", description: "", image: "", category: "", link: "", sortOrder: 0, active: true });
    load();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Hapus item ini?")) return;
    await fetch(`/api/admin/portfolio/${id}`, { method: "DELETE" });
    load();
  };

  const openEdit = (p: PortfolioItem) => {
    setEditing(p);
    setForm({ title: p.title, description: p.description || "", image: p.image || "", category: p.category || "", link: p.link || "", sortOrder: p.sortOrder, active: p.active });
    setShowModal(true);
  };

  const inputStyle = { width: "100%", padding: "0.6rem 0.75rem", background: "#f5f7f8", border: "1px solid #d9e1e9", borderRadius: "6px", color: "#102638", fontSize: "0.9rem", outline: "none" };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 700, fontFamily: "'Space Grotesk'" }}>Portfolio</h1>
          <p style={{ color: "#657789" }}>Kelola proyek yang ditampilkan</p>
        </div>
        <button onClick={() => { setEditing(null); setForm({ title: "", description: "", image: "", category: "", link: "", sortOrder: 0, active: true }); setShowModal(true); }} style={{ padding: "0.6rem 1.5rem", background: "#80cbc4", color: "#ffffff", border: "none", borderRadius: "8px", fontWeight: 600, cursor: "pointer" }}>
          + Tambah
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
        {items.map((p) => (
          <div key={p.id} style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ height: "160px", background: "#f0f2f4", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {p.image ? <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: "2rem" }}>💼</span>}
            </div>
            <div style={{ padding: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.5rem" }}>
                <h3 style={{ fontWeight: 600, fontSize: "1rem", fontFamily: "'Space Grotesk'" }}>{p.title}</h3>
                <span style={{ padding: "0.15rem 0.5rem", borderRadius: "9999px", fontSize: "0.7rem", background: "rgba(128,203,196,0.1)", color: "#80cbc4" }}>{p.category || "Umum"}</span>
              </div>
              <p style={{ color: "#657789", fontSize: "0.85rem", marginBottom: "1rem" }}>{p.description}</p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button onClick={() => openEdit(p)} style={{ flex: 1, padding: "0.4rem", background: "transparent", border: "1px solid #d9e1e9", color: "#657789", borderRadius: "6px", cursor: "pointer", fontSize: "0.8rem" }}>Edit</button>
                <button onClick={() => handleDelete(p.id)} style={{ flex: 1, padding: "0.4rem", background: "transparent", border: "1px solid #e53935", color: "#e53935", borderRadius: "6px", cursor: "pointer", fontSize: "0.8rem" }}>Hapus</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem", width: "90%", maxWidth: "500px", maxHeight: "90vh", overflowY: "auto" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem", fontFamily: "'Space Grotesk'" }}>{editing ? "Edit" : "Tambah"} Portfolio</h2>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.4rem" }}>Judul</label>
              <input style={inputStyle} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="E-Commerce Platform" />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.4rem" }}>Deskripsi</label>
              <textarea style={{ ...inputStyle, minHeight: "60px", resize: "vertical" }} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.4rem" }}>Kategori</label>
              <input style={inputStyle} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Web Development" />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <ImageUpload value={form.image} onChange={(url) => setForm({ ...form, image: url })} label="Gambar Proyek" />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.4rem" }}>Link Proyek</label>
              <input style={inputStyle} value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} placeholder="https://..." />
            </div>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
              <button onClick={() => { setShowModal(false); setEditing(null); }} style={{ padding: "0.6rem 1.5rem", background: "transparent", border: "1px solid #d9e1e9", color: "#657789", borderRadius: "8px", cursor: "pointer" }}>Batal</button>
              <button onClick={handleSave} style={{ padding: "0.6rem 1.5rem", background: "#80cbc4", color: "#ffffff", border: "none", borderRadius: "8px", fontWeight: 600, cursor: "pointer" }}>Simpan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
