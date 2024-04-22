import "./globals.css";
import "../styles/global.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Sidebar } from "@repo/ui";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

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
        className={`flex ${montserrat.className} grid grid-cols-[auto_1fr] h-screen`}
      >
        <Sidebar />
        <div className="col-span-1 bg-white">{children}</div>
      </body>
    </html>
  );
}
