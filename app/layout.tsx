import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ServerNavigation from "./components/serverNavigation";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Discord Clone",
  description: "Work by jkirubai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto.className} ${montserrat.variable}`}
      >
        <ServerNavigation>{children}</ServerNavigation>
      </body>
    </html>
  );
}
