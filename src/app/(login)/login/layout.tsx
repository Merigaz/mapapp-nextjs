import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionWrapper from "@/libs/sessionProvider";
import AntdThemeProvider from "@/libs/antdThemeProvider";
import "../../globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Map APP",
  description: "Map app",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AntdThemeProvider>
        <SessionWrapper>
          <body className={inter.className}>
        
              <main>
                Login
                {children}
            
              </main>
          
          </body>
        </SessionWrapper>
      </AntdThemeProvider>
    </html>
  );
}
