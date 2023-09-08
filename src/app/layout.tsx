import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionWrapper from "@/libs/sessionProvider";
import "./globals.css";
import SideBar from "./components/sidebarComponent";
import MenuComponent from "./components/menuComponent";
import AntdThemeProvider from "@/libs/antdThemeProvider";
import ContextProvider from "@/libs/createContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Map APP",
  description: "Map app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AntdThemeProvider>
        <SessionWrapper>
          <body className={inter.className}>
            <SideBar />
            <main>
              <ContextProvider>
                {children}
                <MenuComponent />
              </ContextProvider>
            </main>
          </body>
        </SessionWrapper>
      </AntdThemeProvider>
    </html>
  );
}
