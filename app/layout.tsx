import { Bellefair, Barlow_Condensed, Barlow } from "@next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import AnalyticsWrapper from "@/components/analytics";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bellefair",
});
const barlowCond = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--barlowCondensed",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--barlow",
});

export const metadata: Metadata = {
  title: {
    default: "Space Tourism",
    template: "%s | Space Tourism",
  },
  description:
    "Discover the wonders of space tourism and explore the final frontier with our comprehensive guide. Learn about the latest developments in commercial space travel, the best destinations to visit, and the thrilling experiences that await you in zero-gravity. Start planning your space adventure today and be one of the few to have the ultimate out-of-this-world experience.",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlowCond.variable} ${barlow.variable} bg-bgColor`}
      >
        <Header />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
};

export default RootLayout;
