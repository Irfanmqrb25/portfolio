import { getSession } from "@/app/actions/getSession";
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getSession();
    const body = await req.json();

    const { message, created_by } = body;

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const chat = await prisma?.guestbook.create({
      data: {
        created_by,
        message,
        image: session?.user?.image!,
      },
    });

    return NextResponse.json(chat);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const chat = await prisma.guestbook.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return NextResponse.json(chat);
  } catch (error: any) {
    console.log("ERROR_GET_GUESTBOOK", error.message);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
