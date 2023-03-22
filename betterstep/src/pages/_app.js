import "@/styles/globals.css";
import { Hind_Madurai } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const hind = Hind_Madurai({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={hind.className}>
      <Component {...pageProps} />
    </div>
  );
}
