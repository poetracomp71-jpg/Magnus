import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Jika Cloudinary dikonfigurasi (untuk Vercel), pakai Cloudinary agar permanen
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    if (cloudName && apiKey && apiSecret) {
      try {
        const { v2: cloudinary } = await import("cloudinary");
        cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });
        const arrayBuffer = await file.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");
        const dataUri = `data:${file.type || "image/jpeg"};base64,${base64}`;
        const result = await cloudinary.uploader.upload(dataUri, { folder: "magnus" });
        return NextResponse.json({ url: result.secure_url });
      } catch (e) {
        console.error("Cloudinary upload failed, fallback to local", e);
      }
    }

    // Fallback lokal (untuk dev tanpa Cloudinary)
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = path.extname(file.name) || ".jpg";
    const filename = `${uuidv4()}${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "Media");

    await mkdir(uploadDir, { recursive: true });
    await writeFile(path.join(uploadDir, filename), buffer);

    return NextResponse.json({ url: `/Media/${filename}` });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
