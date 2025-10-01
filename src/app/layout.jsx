import "./globals.css";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  variable: "--font-afacad",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Moch. Irfan Rafif - Fullstack Developer",
    template: "%s | Moch. Irfan Rafif",
  },
  description:
    "Fullstack Developer specializing in Frontend Development. Experienced with React, Next.js, Flutter, and modern web technologies. Currently working at Cinema XXI as a Frontend Developer.",
  keywords: [
    "Irfan Rafif",
    "Fullstack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Android Developer",
    "JavaScript",
    "TypeScript",
    "Web Developer",
    "Mobile Developer",
    "Indonesia Developer",
    "Malang Developer",
  ],
  authors: [
    { name: "Moch. Irfan Rafif", url: "https://github.com/mirfanrafif" },
  ],
  creator: "Moch. Irfan Rafif",
  publisher: "Moch. Irfan Rafif",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mirfanrafif.my.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Moch. Irfan Rafif - Fullstack Developer",
    description:
      "Fullstack Developer specializing in Frontend Development. Performance over Aesthetics.",
    url: "https://mirfanrafif.my.id",
    siteName: "Irfan Rafif Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/43906580?v=4",
        width: 1200,
        height: 630,
        alt: "Moch. Irfan Rafif - Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moch. Irfan Rafif - Fullstack Developer",
    description:
      "Fullstack Developer specializing in Frontend Development. Performance over Aesthetics.",
    images: ["https://avatars.githubusercontent.com/u/43906580?v=4"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you set up verification
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} antialiased`}>{children}</body>
    </html>
  );
}
