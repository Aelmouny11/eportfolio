import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const CustomHead = () => {
  const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter } = useConfig();
  const basePath = useRouter().basePath;
  const url = `${basePath}${asPath}`;

  return (
    <>
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
      <meta property="twitter:url" content={url} />
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
};

export default CustomHead;
