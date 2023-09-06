import prisma from "@/libs/prisma";
import * as bcrypt from "bcrypt";

export async function POST(request: Request) {
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
    return new Response(JSON.stringify(result),{status:200});
  } else {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
        
      },
    });
    const { password, ...result } = user;
    return new Response(JSON.stringify(result),{status:200});
  }
}
