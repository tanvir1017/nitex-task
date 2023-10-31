import Footer from "@/components/app-components/footer/footer";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NITEX TASK BY INTERACTIVE CARE",
  description: "React Js landing page for task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={poppins.className}>
        {children}
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
        </ThemeProvider> */}
        <Footer />
      </body>
    </html>
  );
}
