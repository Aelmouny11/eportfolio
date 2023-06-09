import { Html, Head, Main, NextScript } from "next/document";

import PWAInstallationButton from "@/components/InstallPWA"

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
