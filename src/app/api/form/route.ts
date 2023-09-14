import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (session && session?.user.role === "admin") {
    const votingPlace = await prisma.votingPlace.findMany();
    return NextResponse.json({ votingPlace });
  }

  return new Response("unauthorized", { status: 401 });
}
