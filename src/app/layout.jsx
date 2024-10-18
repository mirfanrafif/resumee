import "./globals.css";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  variable: "--font-afacad",
  weight: ["400", "700"],
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
