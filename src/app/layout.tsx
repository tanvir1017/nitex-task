import Footer from "@/components/app-components/footer/footer";
import { ThemeProvider } from "@/components/customize-shadcnui-components/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
