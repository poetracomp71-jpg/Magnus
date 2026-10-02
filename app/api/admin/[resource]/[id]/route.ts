import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: { resource: string; id: string } }
) {
  try {
    const { resource, id } = params;
    const data = await request.json();
    const idNum = parseInt(id);

    switch (resource) {
      case "services":
        const service = await prisma.service.update({
          where: { id: idNum },
          data,
        });
        return NextResponse.json(service);
      case "portfolio":
        const portfolio = await prisma.portfolio.update({
          where: { id: idNum },
          data,
        });
        return NextResponse.json(portfolio);
      case "customers":
        const customer = await prisma.customer.update({
          where: { id: idNum },
          data,
        });
        return NextResponse.json(customer);
      default:
        return NextResponse.json({ error: "Unknown resource" }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { resource: string; id: string } }
) {
  try {
    const { resource, id } = params;
    const idNum = parseInt(id);

    switch (resource) {
      case "services":
        await prisma.service.delete({ where: { id: idNum } });
        return NextResponse.json({ success: true });
      case "portfolio":
        await prisma.portfolio.delete({ where: { id: idNum } });
        return NextResponse.json({ success: true });
      case "customers":
        await prisma.customer.delete({ where: { id: idNum } });
        return NextResponse.json({ success: true });
      default:
        return NextResponse.json({ error: "Unknown resource" }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
