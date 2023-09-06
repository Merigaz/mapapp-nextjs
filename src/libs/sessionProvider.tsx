"use client";
import { SessionProvider } from "next-auth/react";

const SessionWrapper = ({children}: PropChildren) => {
return <SessionProvider>{children}</SessionProvider>
}
export default SessionWrapper