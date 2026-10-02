"use client";

import { useEffect, useState } from "react";

export default function ContactPage() {
  const [settings, setSettings] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin?resource=settings").then((r) => r.json()).then(setSettings);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resource: "settings", data: settings }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const fieldStyle = { marginBottom: "1.25rem" };
  const labelStyle = { display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.5rem" };
  const inputStyle = { width: "100%", padding: "0.75rem 1rem", background: "#f5f7f8", border: "1px solid #d9e1e9", borderRadius: "8px", color: "#102638", fontSize: "0.95rem", outline: "none" };

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", fontFamily: "'Space Grotesk'" }}>Kontak</h1>
      <p style={{ color: "#657789", marginBottom: "2rem" }}>Kelola informasi kontak dan WhatsApp</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: "1100px" }}>
        <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem" }}>📞 Informasi Kontak</h2>
          <div style={fieldStyle}>
            <label style={labelStyle}>Telepon</label>
            <input style={inputStyle} value={settings.phone || ""} onChange={(e) => setSettings({ ...settings, phone: e.target.value })} placeholder="085811470226" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Email</label>
            <input style={inputStyle} type="email" value={settings.email || ""} onChange={(e) => setSettings({ ...settings, email: e.target.value })} placeholder="hello@putracomp.id" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>WhatsApp (format: 628123456789)</label>
            <input style={inputStyle} value={settings.whatsapp || ""} onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })} placeholder="6281234567890" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Pesan Default WhatsApp</label>
            <textarea style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }} value={settings.whatsappMessage || ""} onChange={(e) => setSettings({ ...settings, whatsappMessage: e.target.value })} placeholder="Halo Putra Comp, saya ingin bertanya..." />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Alamat</label>
            <textarea style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }} value={settings.address || ""} onChange={(e) => setSettings({ ...settings, address: e.target.value })} placeholder="Alamat kantor Anda" />
          </div>
        </div>

        <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem" }}>💬 Teks Section Contact</h2>
          <div style={fieldStyle}>
            <label style={labelStyle}>Badge (label kecil)</label>
            <input style={inputStyle} value={settings.contactBadge || ""} onChange={(e) => setSettings({ ...settings, contactBadge: e.target.value })} placeholder="HUBUNGI KAMI" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Judul</label>
            <input style={inputStyle} value={settings.contactTitle || ""} onChange={(e) => setSettings({ ...settings, contactTitle: e.target.value })} placeholder="Mari Berdiskusi" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Subtitle</label>
            <textarea style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }} value={settings.contactSubtitle || ""} onChange={(e) => setSettings({ ...settings, contactSubtitle: e.target.value })} placeholder="Ceritakan kebutuhan Anda, kami siap membantu." />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <button onClick={handleSave} disabled={saving} style={{ padding: "0.75rem 2rem", background: "#80cbc4", color: "#ffffff", border: "none", borderRadius: "8px", fontWeight: 700, cursor: "pointer", opacity: saving ? 0.7 : 1 }}>
          {saved ? "✓ Tersimpan!" : saving ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </div>
  );
}
