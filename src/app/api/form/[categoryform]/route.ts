import { FormType } from "@/types/interface";

export async function POST(
  request: Request,
  { params }: { params: { categoryform: string } }
) {
  const categoryform = params.categoryform;
  switch (categoryform) {
    case "vote":
      const body: FormType = await request.json();
      return new Response(JSON.stringify(body), { status: 200 });
    case "address":
      const bodyaddress: FormType = await request.json();
      return new Response(JSON.stringify(bodyaddress), { status: 200 });
    default:
      return new Response(" No vote");
  }
}
