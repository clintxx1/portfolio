"use client";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
