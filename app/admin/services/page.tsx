"use client";

import { useEffect, useState } from "react";
import ImageUpload from "@/components/ImageUpload";

interface Service {
  id: number;
  title: string;
  description: string | null;
  icon: string | null;
  image: string | null;
  sortOrder: number;
  active: boolean;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [editing, setEditing] = useState<Service | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", icon: "", image: "", sortOrder: 0, active: true });

  const load = () => fetch("/api/admin?resource=services").then((r) => r.json()).then(setServices);
  useEffect(() => { load(); }, []);

  const handleSave = async () => {
    if (editing) {
      await fetch(`/api/admin/services/${editing.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ resource: "services", data: form }) });
    }
    setShowModal(false); setEditing(null);
    setForm({ title: "", description: "", icon: "", image: "", sortOrder: 0, active: true });
    load();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Hapus layanan ini?")) return;
    await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
    load();
  };

  const openEdit = (s: Service) => {
    setEditing(s);
    setForm({ title: s.title, description: s.description || "", icon: s.icon || "", image: s.image || "", sortOrder: s.sortOrder, active: s.active });
    setShowModal(true);
  };

  const inputStyle = { width: "100%", padding: "0.6rem 0.75rem", background: "#f5f7f8", border: "1px solid #d9e1e9", borderRadius: "6px", color: "#102638", fontSize: "0.9rem", outline: "none" };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 700, fontFamily: "'Space Grotesk'" }}>Layanan</h1>
          <p style={{ color: "#657789" }}>Kelola daftar layanan yang ditampilkan</p>
        </div>
        <button onClick={() => { setEditing(null); setForm({ title: "", description: "", icon: "", image: "", sortOrder: 0, active: true }); setShowModal(true); }} style={{ padding: "0.6rem 1.5rem", background: "#80cbc4", color: "#ffffff", border: "none", borderRadius: "8px", fontWeight: 600, cursor: "pointer" }}>
          + Tambah
        </button>
      </div>

      <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #d9e1e9" }}>
              <th style={{ padding: "1rem", textAlign: "left", color: "#657789", fontSize: "0.8rem", fontWeight: 600 }}>GAMBAR</th>
              <th style={{ padding: "1rem", textAlign: "left", color: "#657789", fontSize: "0.8rem", fontWeight: 600 }}>ICON</th>
              <th style={{ padding: "1rem", textAlign: "left", color: "#657789", fontSize: "0.8rem", fontWeight: 600 }}>JUDUL</th>
              <th style={{ padding: "1rem", textAlign: "left", color: "#657789", fontSize: "0.8rem", fontWeight: 600 }}>STATUS</th>
              <th style={{ padding: "1rem", textAlign: "right", color: "#657789", fontSize: "0.8rem", fontWeight: 600 }}>AKSI</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.id} style={{ borderBottom: "1px solid #d9e1e9" }}>
                <td style={{ padding: "0.75rem" }}>
                  {s.image ? <img src={s.image} alt={s.title} style={{ width: "60px", height: "40px", objectFit: "cover", borderRadius: "6px" }} /> : <span style={{ color: "#d9e1e9", fontSize: "1.5rem" }}>🖼️</span>}
                </td>
                <td style={{ padding: "1rem", fontSize: "1.5rem" }}>{s.icon || "⚡"}</td>
                <td style={{ padding: "1rem", fontWeight: 600 }}>{s.title}</td>
                <td style={{ padding: "1rem" }}>
                  <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600, background: s.active ? "rgba(128,203,196,0.1)" : "rgba(229,57,53,0.1)", color: s.active ? "#80cbc4" : "#e53935" }}>
                    {s.active ? "Aktif" : "Nonaktif"}
                  </span>
                </td>
                <td style={{ padding: "1rem", textAlign: "right" }}>
                  <button onClick={() => openEdit(s)} style={{ padding: "0.4rem 0.75rem", background: "transparent", border: "1px solid #d9e1e9", color: "#657789", borderRadius: "6px", cursor: "pointer", marginRight: "0.5rem", fontSize: "0.8rem" }}>Edit</button>
                  <button onClick={() => handleDelete(s.id)} style={{ padding: "0.4rem 0.75rem", background: "transparent", border: "1px solid #e53935", color: "#e53935", borderRadius: "6px", cursor: "pointer", fontSize: "0.8rem" }}>Hapus</button>
                </td>
              </tr>
            ))}
            {services.length === 0 && <tr><td colSpan={5} style={{ padding: "2rem", textAlign: "center", color: "#657789" }}>Belum ada layanan</td></tr>}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem", width: "90%", maxWidth: "500px", maxHeight: "90vh", overflowY: "auto" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem", fontFamily: "'Space Grotesk'" }}>{editing ? "Edit" : "Tambah"} Layanan</h2>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.4rem" }}>Icon (emoji)</label>
              <input style={inputStyle} value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} placeholder="🌐" />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.4rem" }}>Judul</label>
              <input style={inputStyle} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Custom Web Development" />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.4rem" }}>Deskripsi</label>
              <textarea style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <ImageUpload value={form.image} onChange={(url) => setForm({ ...form, image: url })} label="Gambar Layanan" />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.4rem" }}>Urutan</label>
              <input style={inputStyle} type="number" value={form.sortOrder} onChange={(e) => setForm({ ...form, sortOrder: parseInt(e.target.value) || 0 })} />
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
