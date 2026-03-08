import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DelegateMentalLoad.com — Make Invisible Labor Visible",
  description: "A relationship tool that helps couples visualize and divide the mental load and invisible labor of running a shared life.",
  openGraph: {
    title: "DelegateMentalLoad.com — Make Invisible Labor Visible",
    description: "A relationship tool that helps couples visualize and divide the mental load and invisible labor of running a shared life.",
    images: [{ url: "/Gemini_Generated_Image_cguww2cguww2cguw.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/Gemini_Generated_Image_cguww2cguww2cguw.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
