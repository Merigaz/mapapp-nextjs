import prisma from "@/libs/prisma";

export async function GET() {
    ;
  
    const user = await prisma.votingPlace.findUnique({
      where: {
        id: "clmkz3gyt0001unqg7mi22noq",
      },
    });
    return new Response(JSON.stringify(user), { status: 200 })
  }
  