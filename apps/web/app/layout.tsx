import "./globals.css";
import "../styles/global.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@repo/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`flex ${inter.className} grid grid-cols-[auto_1fr] h-screen`}
      >
        <Sidebar />
        <div className="col-span-1">{children}</div>
      </body>
    </html>
  );
}
