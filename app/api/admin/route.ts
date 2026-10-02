import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const resource = searchParams.get("resource");

  try {
    if (!resource) {
      const settings = await prisma.siteSettings.findUnique({ where: { id: 1 } });
      return NextResponse.json(settings || {});
    }

    switch (resource) {
      case "settings":
        const settingsData = await prisma.siteSettings.findUnique({ where: { id: 1 } });
        return NextResponse.json(settingsData || {});
      case "services":
        const services = await prisma.service.findMany({ orderBy: { sortOrder: "asc" } });
        return NextResponse.json(services);
      case "portfolio":
        const portfolio = await prisma.portfolio.findMany({ orderBy: { sortOrder: "asc" } });
        return NextResponse.json(portfolio);
      case "customers":
        const customers = await prisma.customer.findMany({ orderBy: { sortOrder: "asc" } });
        return NextResponse.json(customers);
      default:
        return NextResponse.json({ error: "Unknown resource" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { resource, data } = body;

    if (resource === "settings") {
      const result = await prisma.siteSettings.upsert({
        where: { id: 1 },
        update: data,
        create: { id: 1, ...data },
      });
      return NextResponse.json(result);
    }

    if (resource === "services") {
      const result = await prisma.service.create({ data });
      return NextResponse.json(result);
    }

    if (resource === "portfolio") {
      const result = await prisma.portfolio.create({ data });
      return NextResponse.json(result);
    }

    if (resource === "customers") {
      const result = await prisma.customer.create({ data });
      return NextResponse.json(result);
    }

    return NextResponse.json({ error: "Unknown resource" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
