import prisma from "@/libs/prisma";
import { FormType } from "@/types/interface";
import { authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function POST(
  request: Request,
  { params }: { params: { categoryform: string } }
) {
  const session = await getServerSession(authOptions);
  const categoryform = params.categoryform;
  if (session && session?.user.role === "admin") {
    switch (categoryform) {
      case "vote":
        const bodyvote: FormType = await request.json();
        const vote = await prisma.votingPlace.create({
          data: {
            votingplace: bodyvote.votingplace,
            addressvotingplace: bodyvote.addressvotingplace,
          },
        });
        return new Response(JSON.stringify(vote), { status: 200 });
      case "address":
        const bodyaddress: FormType = await request.json();
        //context: doesnt matter if i use type number because ...
        //the form submit a string so prisma throw an error of type because is expecting an integer
        // I did this on purpose because setting type number in the form, is overengineer that simple form and i want to keep this readable
        const id = parseInt(bodyaddress.id);
        const phone = parseInt(bodyaddress.phone);
        const table = parseInt(bodyaddress.table);
        const address = await prisma.votingPlace.update({
          where: { id: bodyaddress.idvotingplace },
          data: {
            addresses: {
              create: {
                name: bodyaddress.name,
                id: id,
                phone: phone,
                addressname: bodyaddress.addressname,
                neighborhood: bodyaddress.neighborhood,
                date: bodyaddress.date,
                table: table,
              },
            },
          },
        });
        return new Response(JSON.stringify(address), { status: 200 });

      default:
        return new Response("404 not found", { status: 404 });
    }
  }
  return new Response("unauthorized", { status: 401 });
}
