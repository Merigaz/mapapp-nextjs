import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionWrapper from "@/libs/sessionProvider";
import "./globals.css"
import StyledComponentsRegistry from "@/libs/AntdRegistry";

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
      <body className={inter.className}>
        <SessionWrapper>
          <StyledComponentsRegistry>
          
              {children}
          
          </StyledComponentsRegistry>
        </SessionWrapper>
      </body>
    </html >
  );
}

9