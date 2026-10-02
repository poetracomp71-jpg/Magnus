"use client";

import { useRef, useState } from "react";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  placeholder?: string;
}

export default function ImageUpload({ value, onChange, label = "Gambar", placeholder = "https://..." }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) onChange(data.url);
    } catch (err) { console.error(err); }
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div>
      <label style={{ display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.4rem" }}>{label}</label>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <input ref={fileRef} type="file" accept="image/*" onChange={handleUpload} style={{ display: "none" }} />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          style={{
            padding: "0.6rem 0.8rem", background: "#f5f7f8", border: "1px dashed #d9e1e9",
            borderRadius: "6px", cursor: "pointer", fontSize: "0.85rem", color: "#657789",
            whiteSpace: "nowrap", transition: "all 0.2s",
          }}
        >
          {uploading ? "⏳" : "📁 Browse"}
        </button>
        <input
          style={{ width: "100%", padding: "0.6rem 0.75rem", background: "#f5f7f8", border: "1px solid #d9e1e9", borderRadius: "6px", color: "#102638", fontSize: "0.9rem", outline: "none" }}
          value={value || ""} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        />
      </div>
      {value && (
        <div style={{ marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src={value} alt="Preview" style={{ height: "40px", borderRadius: "6px", objectFit: "contain", border: "1px solid #e2e8f0" }} />
          <button type="button" onClick={() => onChange("")} style={{ fontSize: "0.75rem", color: "#e53935", cursor: "pointer", background: "none", border: "none" }}>✕ Hapus</button>
        </div>
      )}
    </div>
  );
}
