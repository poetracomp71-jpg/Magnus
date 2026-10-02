"use client";

import { useEffect, useState } from "react";
import ImageUpload from "@/components/ImageUpload";

interface Customer {
  id: number;
  name: string;
  logoUrl: string | null;
  sortOrder: number;
  active: boolean;
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [editing, setEditing] = useState<Customer | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", logoUrl: "", sortOrder: 0, active: true });

  const load = () => fetch("/api/admin?resource=customers").then((r) => r.json()).then(setCustomers);
  useEffect(() => { load(); }, []);

  const handleSave = async () => {
    if (editing) {
      await fetch(`/api/admin/customers/${editing.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ resource: "customers", data: form }) });
    }
    setShowModal(false); setEditing(null);
    setForm({ name: "", logoUrl: "", sortOrder: 0, active: true });
    load();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Hapus klien ini?")) return;
    await fetch(`/api/admin/customers/${id}`, { method: "DELETE" });
    load();
  };

  const inputStyle = { width: "100%", padding: "0.6rem 0.75rem", background: "#f5f7f8", border: "1px solid #d9e1e9", borderRadius: "6px", color: "#102638", fontSize: "0.9rem", outline: "none" };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 700, fontFamily: "'Space Grotesk'" }}>Klien</h1>
          <p style={{ color: "#657789" }}>Kelola daftar klien yang bekerja sama</p>
        </div>
        <button onClick={() => { setEditing(null); setForm({ name: "", logoUrl: "", sortOrder: 0, active: true }); setShowModal(true); }} style={{ padding: "0.6rem 1.5rem", background: "#80cbc4", color: "#ffffff", border: "none", borderRadius: "8px", fontWeight: 600, cursor: "pointer" }}>
          + Tambah
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
        {customers.map((c) => (
          <div key={c.id} style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "1.5rem", textAlign: "center" }}>
            <div style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#f0f2f4", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
              {c.logoUrl ? <img src={c.logoUrl} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "12px" }} /> : <span style={{ fontSize: "1.5rem" }}>🏢</span>}
            </div>
            <h3 style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "1rem", fontFamily: "'Space Grotesk'" }}>{c.name}</h3>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button onClick={() => { setEditing(c); setForm({ name: c.name, logoUrl: c.logoUrl || "", sortOrder: c.sortOrder, active: c.active }); setShowModal(true); }} style={{ flex: 1, padding: "0.4rem", background: "transparent", border: "1px solid #d9e1e9", color: "#657789", borderRadius: "6px", cursor: "pointer", fontSize: "0.8rem" }}>Edit</button>
              <button onClick={() => handleDelete(c.id)} style={{ flex: 1, padding: "0.4rem", background: "transparent", border: "1px solid #e53935", color: "#e53935", borderRadius: "6px", cursor: "pointer", fontSize: "0.8rem" }}>Hapus</button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem", width: "90%", maxWidth: "450px" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem", fontFamily: "'Space Grotesk'" }}>{editing ? "Edit" : "Tambah"} Klien</h2>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.4rem" }}>Nama Perusahaan</label>
              <input style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="PT Contoh" />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <ImageUpload value={form.logoUrl} onChange={(url) => setForm({ ...form, logoUrl: url })} label="Logo Klien" />
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
