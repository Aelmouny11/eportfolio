import Image from "next/image";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Footer from "./components/Footer";

// import CustomHead from "./components/CustomHead";
const themeconfig = {
  nextThemes: { defaultTheme: "light" },
  toc: { component: "" },
  editLink: { text: "" },
  logo: (
    <Image
      src={"/logo.png"}
      width={40}
      height={40}
      responsive
      alt="Azdddine's ePortfolio Logo bg-white rounded-full bg-white"
    />
  ),
  gitTimestamp: "",
  project: {
    link: "https://github.com/aelmouny11/eportfolio",
  },
  footer: {
    text: <Footer />,
  },
  darkMode: true,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 0,
    autoCollapse: true,
  },
  search: {
    placeholder: "Rechercher Les Documents...",

    emptyResult: (
      <span className="h-ful fle w-full items-center justify-center bg-blue-300">
        Aucune Resultat
      </span>
    ),
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    const basePath = useRouter().basePath;
    const url = `${basePath}${asPath}`;

    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}

        <meta charset="UTF-8" />

        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Elmoumny"} />
        <meta
          property="og:description"
          content={frontMatter.description || "Emoumny's portfolio"}
        />
        <title>{frontMatter.title} — ePortfolio Cermef Marrakech</title>
        <meta
          name="title"
          content={`${frontMatter.title} — ePortfolio Cermef Marrakech`}
        />
        <meta
          name="description"
          content="This is the personal portfolio of Azddine Elmoumny, which summarizes everything he had studied in CERMEF"
        />

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url + "/thumbnail.png"} />
        <meta
          property="twitter:title"
          content={`${frontMatter.title} — ePortfolio Cermef Marrakech`}
        />
        <meta
          property="twitter:description"
          content="This is the personal portfolio of Azddine Elmoumny, which summarizes everything he had studied in CERMEF"
        />
        <meta property="twitter:image" content="/logo.png" />
      </>
    );
  },
};
export default themeconfig;
