import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (session && session?.user.role === "admin")
    return new Response(" Ok You Have Logged In!");

  return new Response("unauthorized", { status: 401 });
}
