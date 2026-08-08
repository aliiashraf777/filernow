import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import BeforeFooter from "@/components/common/footer/BeforeFooter";
import { cn } from "@/utils/cn";
import FilerSplashLoader from "@/components/ui-custom/FilerSplashLoader";
import { CalculatorContextProvider } from "@/context/CalculatorContext";
import TaxCalculatorDrawer from "@/components/home/calculator/TaxCalculatorDrawer";
import ScrollToTopButton from "@/components/ui-custom/ScrollToTopBtn";
import { FilerStatusContextProvider } from "@/context/FilerStatusContext";
import FilerStatusDrawer from "@/components/home/filerStatus/FilerStatusDrawer";

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
      className={cn("h-full", "antialiased", plusJakarta.variable, inter.variable, "font-sans")}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                  const stored = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                      document.documentElement.classList.add('dark');
                  }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col text-text-dark bg-page-bg default-transition">
        <FilerStatusContextProvider>
          <CalculatorContextProvider>
            <FilerSplashLoader />
            <Header />
            {children}
            <TaxCalculatorDrawer />
            <FilerStatusDrawer />
            <ScrollToTopButton />
            <BeforeFooter />
            <Footer />
          </CalculatorContextProvider>
        </FilerStatusContextProvider>
      </body>
    </html>
  );
}