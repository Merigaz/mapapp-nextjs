import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {user: {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    password: string | null;
    role: string | null;
  }
    
  }

}

