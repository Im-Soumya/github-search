import { DM_Sans } from "next/font/google";
import "../styles/globals.css";

const dmSans = DM_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${dmSans.className} bg-zinc-900`}>
      <Component {...pageProps} />
    </div>
  );
}
