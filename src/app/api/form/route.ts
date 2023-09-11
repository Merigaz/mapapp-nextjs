import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (session && session?.user.role === "admin") {
    
  }

  return new Response("unauthorized", { status: 401 });
}
