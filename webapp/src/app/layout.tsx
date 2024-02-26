import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WIQ",
  description: "WIQ, the best game ever!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex justify-center items-center quiz-background h-screen">
          <div className="w-full max-w-3xl h-full bg-gray-100  border-l-2 border-r-2 border-black">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
