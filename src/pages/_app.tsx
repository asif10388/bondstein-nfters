import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";

const dmSansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const avertaFont = localFont({
  src: [
    {
      path: "../../public/fonts/AvertaDemoPECuttedDemo-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-averta",
});

const integralFont = localFont({
  src: [
    {
      path: "../../public/fonts/IntegralCF-Regular.woff",
      weight: "400",
    },
    {
      path: "../../public/fonts/IntegralCF-Medium.woff",
      weight: "500",
    },
    {
      path: "../../public/fonts/IntegralCF-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-integral",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${avertaFont.variable} ${integralFont.variable} ${dmSansFont.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
