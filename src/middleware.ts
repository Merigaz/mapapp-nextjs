export { default } from "next-auth/middleware"

export const config = {
    matcher: ["/((?!api/login|login|_next/static|_next/image|favicon.ico).*)"],
  };