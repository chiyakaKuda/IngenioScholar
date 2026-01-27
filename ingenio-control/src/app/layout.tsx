import { Nunito, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { AppProvider } from '@/context/AppContext';

const nunito = Nunito({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: "--font-nunito",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// This object controls what appears in the browser tab and search engines
export const metadata: Metadata = {
  title: "Ingenio Fincontroller | Parent-Controlled Student Spending",
  description: "The intelligent authorization layer for student finance by Ingenio Systems. Secure, non-custodial management of USD & ZiG allowances.",
  icons: {
    icon: "/favicon.ico", // Make sure to add a favicon in your public folder later
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${jetbrains.variable} scroll-smooth`}>
      <AppProvider>
         
      
      <body className="antialiased font-sans bg-[#F8FAFC] text-[#0E1D21]">
        {children}
      </body>
      </AppProvider>
    </html>
  );
}