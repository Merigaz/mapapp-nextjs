import prisma from "@/libs/prisma";
import { FormType, VotingPlace } from "@/types/interface";
import { authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
export async function POST(
  request: Request,
  { params }: { params: { categoryform: string } }
) {
  const session = await getServerSession(authOptions);
  const categoryform = params.categoryform;

  if (session && session?.user.role === "admin") {
    switch (categoryform) {
      case "vote":
        const bodyvote: VotingPlace = await request.json();
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
     
        const pollingplace = await prisma.votingPlace.findUnique({
          where: { id: bodyaddress.idvotingplace },
        });
        let datapollingplace: Prisma.VotingPlaceUpdateInput = {};
        if (pollingplace) {
          datapollingplace = {
            addresses: {
              create: {
                name: bodyaddress.name,
                id: parseInt(bodyaddress.id),
                phone: parseInt(bodyaddress.phone),
                addressname: bodyaddress.addressname,
                neighborhood: bodyaddress.neighborhood,
                date: bodyaddress.date,
                table: parseInt(bodyaddress.table),
                votingplace: pollingplace.votingplace,
                addressvotingplace: pollingplace.addressvotingplace,
              },
            },
          };
        }
        const address = await prisma.votingPlace.update({
          where: { id: bodyaddress.idvotingplace },
          data: datapollingplace,
        });

        return new Response(JSON.stringify(address), { status: 200 });

      default:
        return new Response("404 not found", { status: 404 });
    }
  }
  return new Response("unauthorized", { status: 401 });
}

export async function GET(
  request: Request,
  { params }: { params: { categoryform: string } }
) {
  const session = await getServerSession(authOptions);
  const categoryform = params.categoryform;
  if (session && session?.user.role === "admin") {
    switch (categoryform) {
      case "vote":
        const votingPlace = await prisma.votingPlace.findMany();
        return NextResponse.json({ votingPlace }, { status: 200 });
      case "address":
        const addressData = await prisma.address.findMany();
        return NextResponse.json({ addressData }, { status: 200 });
      default:
        return new Response("404 not found", { status: 404 });
    }
  }

  return new Response("unauthorized", { status: 401 });
}
