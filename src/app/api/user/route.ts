import prisma from "@/libs/prisma";
import * as bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { RequestBody } from "@/types/interface";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (session && session?.user.role === "admin") {
    const body: RequestBody = await request.json();
    const emailCreatedFound = await prisma.user.findFirst({
      where: { email: body.email },
    });
    if (emailCreatedFound) {
      const user = await prisma.user.update({
        where: {
          id: emailCreatedFound.id,
        },
        data: { password: await bcrypt.hash(body.password, 10) },
      });
      const { password, ...result } = user;
      return new Response(JSON.stringify(result), { status: 200 });
    } else {
      const user = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          role: body.role,
          password: await bcrypt.hash(body.password, 10),
        },
      });
      const { password, ...result } = user;
      return new Response(JSON.stringify(result), { status: 200 });
    }
  }
}
