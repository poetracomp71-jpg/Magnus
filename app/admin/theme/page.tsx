"use client";

import { useEffect, useRef, useState } from "react";

export default function ThemePage() {
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

  const handleUpload = async (field: string, file: File) => {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.url) setSettings({ ...settings, [field]: data.url });
  };

  const fieldStyle = { marginBottom: "1rem" };
  const labelStyle = { display: "block", fontSize: "0.8rem", color: "#657789", marginBottom: "0.4rem" };
  const inputStyle = { width: "100%", padding: "0.6rem 0.8rem", background: "#f5f7f8", border: "1px solid #d9e1e9", borderRadius: "8px", color: "#102638", fontSize: "0.9rem", outline: "none" };

  const ColorField = ({ label, field, defaultVal }: { label: string; field: string; defaultVal: string }) => (
    <div style={fieldStyle}>
      <label style={labelStyle}>{label}</label>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <input type="color" value={settings[field] || defaultVal} onChange={(e) => setSettings({ ...settings, [field]: e.target.value })} style={{ width: "40px", height: "34px", border: "none", borderRadius: "6px", cursor: "pointer", background: "transparent" }} />
        <input style={{ ...inputStyle, flex: 1 }} value={settings[field] || defaultVal} onChange={(e) => setSettings({ ...settings, [field]: e.target.value })} />
      </div>
    </div>
  );

  const ImageField = ({ label, field }: { label: string; field: string }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
      <div style={fieldStyle}>
        <label style={labelStyle}>{label}</label>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => { if (e.target.files?.[0]) handleUpload(field, e.target.files[0]); }} />
          <button onClick={() => inputRef.current?.click()} style={{ padding: "0.5rem 1rem", background: "#e0f2f1", color: "#0D9488", border: "1px solid #b2dfdb", borderRadius: "6px", fontWeight: 600, fontSize: "0.8rem", cursor: "pointer", whiteSpace: "nowrap" }}>
            Browse
          </button>
          <input style={{ ...inputStyle, flex: 1 }} value={settings[field] || ""} onChange={(e) => setSettings({ ...settings, [field]: e.target.value })} placeholder="URL gambar atau upload" />
        </div>
        {settings[field] && (
          <div style={{ marginTop: "0.5rem", position: "relative", display: "inline-block" }}>
            <img src={settings[field]} alt="" style={{ width: "100%", maxHeight: "120px", objectFit: "cover", borderRadius: "6px", border: "1px solid #e0e0e0" }} />
            <button onClick={() => setSettings({ ...settings, [field]: "" })} style={{ position: "absolute", top: "4px", right: "4px", background: "#ef4444", color: "white", border: "none", borderRadius: "50%", width: "20px", height: "20px", fontSize: "10px", cursor: "pointer", display: "grid", placeItems: "center" }}>✕</button>
          </div>
        )}
      </div>
    );
  };

  const OpacityField = ({ label, field }: { label: string; field: string }) => (
    <div style={fieldStyle}>
      <label style={labelStyle}>{label} ({Math.round((settings[field] || 0) * 100)}%)</label>
      <input type="range" min="0" max="1" step="0.05" value={settings[field] || 0} onChange={(e) => setSettings({ ...settings, [field]: parseFloat(e.target.value) })} style={{ width: "100%", accentColor: "#0D9488" }} />
    </div>
  );

  const ToggleField = ({ label, field }: { label: string; field: string }) => {
    const isActive = settings[field] !== false;
    return (
      <div style={{ ...fieldStyle, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #f0f0f0" }}>
        <span style={{ fontSize: "0.85rem", color: "#102638" }}>{label}</span>
        <button
          onClick={() => setSettings({ ...settings, [field]: !isActive })}
          style={{
            width: "44px", height: "24px", borderRadius: "12px", border: "none", cursor: "pointer",
            background: isActive ? "#0D9488" : "#d9e1e9", position: "relative", transition: "background 0.2s",
          }}
        >
          <div style={{
            width: "18px", height: "18px", borderRadius: "50%", background: "#fff",
            position: "absolute", top: "3px", left: isActive ? "23px" : "3px",
            transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }} />
        </button>
      </div>
    );
  };

  const sections = [
    { title: "🎨 Warna Global", fields: [
      { label: "Warna Primer (Aksen)", field: "primaryColor", defaultVal: "#0D9488" },
      { label: "Warna Sekunder (Background)", field: "secondaryColor", defaultVal: "#F0FDFA" },
    ]},
    { title: "🏠 Hero Section", toggle: { label: "Hero Section", field: "heroActive" }, fields: [
      { label: "Background Color", field: "heroColor", defaultVal: "#F0FDFA" },
      { label: "Text Color", field: "heroTextColor", defaultVal: "#0F172A" },
    ], bgImage: "heroBgImage", bgOpacity: "heroBgOpacity" },
    { title: "📖 About Section", toggle: { label: "About Section", field: "aboutActive" }, fields: [
      { label: "Background Color", field: "aboutColor", defaultVal: "#FFFFFF" },
      { label: "Text Color", field: "aboutTextColor", defaultVal: "#0F172A" },
    ], bgImage: "aboutBgImage", bgOpacity: "aboutBgOpacity" },
    { title: "⚡ Services Section", toggle: { label: "Services Section", field: "servicesActive" }, fields: [
      { label: "Background Color", field: "servicesColor", defaultVal: "#FFFFFF" },
      { label: "Text Color", field: "servicesTextColor", defaultVal: "#0F172A" },
    ], bgImage: "servicesBgImage", bgOpacity: "servicesBgOpacity" },
    { title: "💼 Portfolio Section", toggle: { label: "Portfolio Section", field: "portfolioActive" }, fields: [
      { label: "Background Color", field: "portfolioColor", defaultVal: "#FFFFFF" },
      { label: "Text Color", field: "portfolioTextColor", defaultVal: "#102638" },
    ], bgImage: "portfolioBgImage", bgOpacity: "portfolioBgOpacity" },
    { title: "🏆 Keunggulan & Proses", toggle: null, fields: [] },
    { title: "🤝 Clients Section", toggle: { label: "Clients Section", field: "customersActive" }, fields: [
      { label: "Background Color", field: "clientsColor", defaultVal: "#FFFFFF" },
      { label: "Text Color", field: "clientsTextColor", defaultVal: "#0F172A" },
    ], bgImage: "clientsBgImage", bgOpacity: "clientsBgOpacity" },
    { title: "📞 Contact Section", toggle: { label: "Contact Section", field: "contactActive" }, fields: [
      { label: "Background Color", field: "contactColor", defaultVal: "#F0FDFA" },
      { label: "Text Color", field: "contactTextColor", defaultVal: "#0F172A" },
      { label: "Panel Kiri (Info) Color", field: "contactInfoColor", defaultVal: "#0D9488" },
    ], bgImage: "contactBgImage", bgOpacity: "contactBgOpacity" },
    { title: "📎 Footer Section", toggle: { label: "Footer Section", field: "footerActive" }, fields: [
      { label: "Background Color", field: "footerColor", defaultVal: "#FFFFFF" },
      { label: "Text Color", field: "footerTextColor", defaultVal: "#64748B" },
    ], bgImage: "footerBgImage", bgOpacity: "footerBgOpacity" },
  ];

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem" }}>Pengaturan Section</h1>
      <p style={{ color: "#657789", marginBottom: "2rem" }}>Atur warna, gambar background, opacity, dan visibilitas setiap section</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem" }}>
        {sections.map((section, i) => (
          <div key={i} style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>{section.title}</h2>
            {section.toggle && (
              <div style={{ marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "2px solid #e0f2f1" }}>
                <ToggleField label={section.toggle.label} field={section.toggle.field} />
              </div>
            )}
            {section.fields.map((f, j) => (
              <ColorField key={j} label={f.label} field={f.field} defaultVal={f.defaultVal} />
            ))}
            {"bgImage" in section && section.bgImage && (
              <ImageField label="Background Image" field={section.bgImage} />
            )}
            {"bgOpacity" in section && section.bgOpacity && (
              <OpacityField label="Overlay Opacity" field={section.bgOpacity} />
            )}
          </div>
        ))}

        <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>🔍 SEO Settings</h2>
          <div style={fieldStyle}>
            <label style={labelStyle}>SEO Title</label>
            <input style={inputStyle} value={settings.seoTitle || ""} onChange={(e) => setSettings({ ...settings, seoTitle: e.target.value })} placeholder="Putra Comp - Magnus System" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>SEO Description</label>
            <textarea style={{ ...inputStyle, minHeight: "70px", resize: "vertical" }} value={settings.seoDescription || ""} onChange={(e) => setSettings({ ...settings, seoDescription: e.target.value })} placeholder="Deskripsi untuk search engine..." />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Keywords (pisahkan koma)</label>
            <input style={inputStyle} value={settings.seoKeywords || ""} onChange={(e) => setSettings({ ...settings, seoKeywords: e.target.value })} placeholder="web development, mobile app" />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <button onClick={handleSave} disabled={saving} style={{ padding: "0.75rem 2rem", background: "#0D9488", color: "#ffffff", border: "none", borderRadius: "8px", fontWeight: 700, cursor: "pointer", opacity: saving ? 0.7 : 1 }}>
          {saved ? "✓ Tersimpan!" : saving ? "Menyimpan..." : "Simpan Semua"}
        </button>
      </div>
    </div>
  );
}
