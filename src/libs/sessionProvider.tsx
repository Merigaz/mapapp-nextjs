"use client";
import { PropChildren } from "@/types/interface";
import { SessionProvider } from "next-auth/react";

const SessionWrapper = ({children}: PropChildren) => {
return <SessionProvider>{children}</SessionProvider>
}
export default SessionWrapper