export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const headers = new Headers(request.headers);
  const host = headers.get("x-forwarded-host") || headers.get("host") || "";
  const proto = headers.get("x-forwarded-proto") || "https";
  const baseUrl = host ? `${proto}://${host}` : "";

  const body = ["User-Agent: *", "Allow: /", baseUrl ? `Sitemap: ${baseUrl}/sitemap.xml` : ""]
    .filter(Boolean)
    .join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
