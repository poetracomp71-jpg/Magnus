import type { Metadata } from "next";
import "./globals.css";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await prisma.siteSettings.findUnique({ where: { id: 1 } }).catch(() => null);
  const logoUrl = settings?.logoUrl || "";

  return (
    <html lang="id">
      <head>
        <title>{settings?.seoTitle || "Putra Comp - Magnus System | Solusi Digital Terdepan"}</title>
        <meta name="description" content={settings?.seoDescription || "Magnus System by Putra Comp - Membangun custom web, mobile app, landing page, dan company profile profesional untuk bisnis Anda."} />
        {settings?.seoKeywords && <meta name="keywords" content={settings.seoKeywords} />}
        <link rel="icon" href={logoUrl || "/favicon.ico"} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: settings?.companyName || "Putra Comp",
              description: settings?.tagline || "Magnus System - Solusi Digital Terdepan",
              url: "#",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
