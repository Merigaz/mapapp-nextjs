import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionWrapper from "@/libs/sessionProvider";
import "../../app/globals.css";
import SideBar from "../components/sidebarComponent";
import MenuComponent from "../components/menuComponent";
import AntdThemeProvider from "@/libs/antdThemeProvider";
import ContextProvider from "@/libs/createContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Map APP",
  description: "Map app",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AntdThemeProvider>
        <SessionWrapper>
          <body className={inter.className}>
            <ContextProvider>
              <SideBar />
              <main className="flex flex-col h-screen">
                {children}
                <MenuComponent />
              </main>
            </ContextProvider>
          </body>
        </SessionWrapper>
      </AntdThemeProvider>
    </html>
  );
}
