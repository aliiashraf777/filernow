import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Income Tax Return, NTN Registration & Tax Filing | Filernow.com",
  description: "Get your income tax return filed within just 1 day — fast, secure, and fully online. FilerNow helps salaried individuals, freelancers, and businesses stay compliant with tax laws.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-text-dark bg-page-bg">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
