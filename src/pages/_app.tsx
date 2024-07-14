import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {business_data} from "@/data/business-data"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const allowedRoutesSet = new Set(business_data.website_content.navigation.menus.map(route => '/' + route.toLowerCase()));

  useEffect(() => {
    if (!allowedRoutesSet.has(router.pathname)) {
      router.push('/accueil');
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
