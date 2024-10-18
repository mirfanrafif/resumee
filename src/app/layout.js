import localFont from "next/font/local";
import "./globals.css";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  variable: "--font-afacad",
  weight: "variable",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hello!",
  description: "Irfan Rafif's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} antialiased`}>{children}</body>
    </html>
  );
}
