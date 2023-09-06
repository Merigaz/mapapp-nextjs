import prisma from "@/libs/prisma";
import * as bcrypt from "bcrypt";

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });
  if (user && (await bcrypt.compare(body.password, user.password as string))) {
    const { password, ...userWithoutPass } = user;
    return new Response(JSON.stringify(userWithoutPass), { status: 200 });
  } else return new Response(JSON.stringify(null), { status: 401 });
}
