import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* <!-- Google tag (gtag.js) --> */}
      <GoogleTagManager gtmId="G-5MG9RV6XDY" />
    </>
  );
  
}
