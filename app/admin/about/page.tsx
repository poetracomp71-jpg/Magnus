"use client";

import { useEffect, useState } from "react";
import ImageUpload from "@/components/ImageUpload";

export default function AboutPage() {
  const [settings, setSettings] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { fetch("/api/admin?resource=settings").then((r) => r.json()).then(setSettings); }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch("/api/admin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ resource: "settings", data: settings }) });
    setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 2000);
  };

  const fieldStyle = { marginBottom: "1.25rem" };
  const labelStyle = { display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.5rem" };
  const inputStyle = { width: "100%", padding: "0.75rem 1rem", background: "#f5f7f8", border: "1px solid #d9e1e9", borderRadius: "8px", color: "#102638", fontSize: "0.95rem", outline: "none" };

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", fontFamily: "'Space Grotesk'" }}>Tentang Kami</h1>
      <p style={{ color: "#657789", marginBottom: "2rem" }}>Kelola konten section Tentang Kami</p>

      <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem", maxWidth: "700px" }}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Badge / Eyebrow</label>
          <input style={inputStyle} value={settings.aboutSubtitle || ""} onChange={(e) => setSettings({ ...settings, aboutSubtitle: e.target.value })} placeholder="Tentang Kami" />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Judul</label>
          <input style={inputStyle} value={settings.aboutTitle || ""} onChange={(e) => setSettings({ ...settings, aboutTitle: e.target.value })} placeholder="Solusi Digital Terpercaya" />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Deskripsi</label>
          <textarea style={{ ...inputStyle, minHeight: "150px", resize: "vertical" }} value={settings.aboutDescription || ""} onChange={(e) => setSettings({ ...settings, aboutDescription: e.target.value })} placeholder="Tentang perusahaan Anda..." />
        </div>
        <div style={fieldStyle}>
          <ImageUpload value={settings.aboutImage || ""} onChange={(url) => setSettings({ ...settings, aboutImage: url })} label="Gambar About" />
        </div>
        <button onClick={handleSave} disabled={saving} style={{ padding: "0.75rem 2rem", background: "#80cbc4", color: "#ffffff", border: "none", borderRadius: "8px", fontWeight: 700, cursor: "pointer", opacity: saving ? 0.7 : 1 }}>
          {saved ? "✓ Tersimpan!" : saving ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </div>
  );
}
