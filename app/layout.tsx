import { Bellefair, Barlow_Condensed, Barlow } from "@next/font/google";
import "./globals.css";
import Header from "./header";

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

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <head />
      <body
        className={`${bellefair.variable} ${barlowCond.variable} ${barlow.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
