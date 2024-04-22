import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";



export const metadata: Metadata = {
  title: "Home - JustWatch",
  description: "For Abantu Digital Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className="dark:bg-[#1A1C29] bg-white">
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Header />

      
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
