import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "@/components/ui/MainLayout";
import { ReduxProviderWrapper } from "@/store/ReduxProviderWrapper";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next Libs Kit",
  description: "Next JS Libraries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProviderWrapper>
          <ThemeProvider>
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </ReduxProviderWrapper>
      </body>
    </html>
  );
}
