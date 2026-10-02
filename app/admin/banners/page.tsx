"use client";

import { useEffect, useState } from "react";
import ImageUpload from "@/components/ImageUpload";

export default function BannersPage() {
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
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", fontFamily: "'Space Grotesk'" }}>Banner Hero</h1>
      <p style={{ color: "#657789", marginBottom: "2rem" }}>Kelola section hero di halaman utama</p>

      <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem", maxWidth: "700px" }}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Judul Hero</label>
          <input style={inputStyle} value={settings.heroTitle || ""} onChange={(e) => setSettings({ ...settings, heroTitle: e.target.value })} placeholder="Bangun Digital Bersama Kami" />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Subtitle Hero</label>
          <textarea style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }} value={settings.heroSubtitle || ""} onChange={(e) => setSettings({ ...settings, heroSubtitle: e.target.value })} placeholder="Deskripsi singkat tentang layanan Anda" />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Teks CTA Button</label>
          <input style={inputStyle} value={settings.heroCtaText || ""} onChange={(e) => setSettings({ ...settings, heroCtaText: e.target.value })} placeholder="Mulai Proyek" />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Link CTA</label>
          <input style={inputStyle} value={settings.heroCtaLink || ""} onChange={(e) => setSettings({ ...settings, heroCtaLink: e.target.value })} placeholder="#contact" />
        </div>
        <div style={fieldStyle}>
          <ImageUpload value={settings.heroImage || ""} onChange={(url) => setSettings({ ...settings, heroImage: url })} label="Background Image Hero" />
        </div>
        <button onClick={handleSave} disabled={saving} style={{ padding: "0.75rem 2rem", background: "#80cbc4", color: "#ffffff", border: "none", borderRadius: "8px", fontWeight: 700, cursor: "pointer", opacity: saving ? 0.7 : 1 }}>
          {saved ? "✓ Tersimpan!" : saving ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </div>
  );
}
