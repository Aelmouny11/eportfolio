import Image from "next/image";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Footer from "./components/Footer";
export default {
	toc: {
		title: "Dans Ce page",
	},
	editLink: { text: "" },
	logo: <Image src={"/logo.png"} width={50} height={50} />,
	project: {
		link: "https://github.com/aelmouny11/eportfolio",
	},
	footer: {
		text: <Footer />,
	},
	darkMode: true,
	sidebar: {
		toggleButton: true,
	},
	search: {
		placeholder: "Rechercher Les Documents...",
	},
	head: () => {
		const { asPath, defaultLocale, locale } = useRouter();
		const { frontMatter } = useConfig();
		const url =
			"https://eportfolio-elmoumny.vercel.app/" +
			(defaultLocale === locale ? asPath : `/${locale}${asPath}`);

		return (
			<>
				<meta property="og:url" content={url} />
				{/* <meta
					property="og:title"
					content={frontMatter.title || "Elmoumny"}
				/> */}
				<meta
					property="og:description"
					content={frontMatter.description || "Emoumny's portfolio"}
				/>
				<title>
					Elmoumny Azddine — ePortfolio Cermef Marrakech 💥 💥 
				</title>
				<meta
					name="title"
					content="Elmoumny Azddine — ePortfolio Cermef Marrakech 💥 💥 "
				/>
				<meta
					name="description"
					content="This the personal portfolio of Azddine Elmoumny, which summarizes everything he had studied in CERMEF"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content={url} />
				<meta
					property="og:title"
					content="Elmoumny Azddine — ePortfolio Cermef Marrakech 💥 💥 "
				/>
				<meta
					property="og:description"
					content="This the personal portfolio of Azddine Elmoumny, which summarizes everything he had studied in CERMEF"
				/>
				<meta property="og:image" content="/logo.png" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={url} />
				<meta
					property="twitter:title"
					content="Elmoumny Azddine — ePortfolio Cermef Marrakech 💥 💥 "
				/>
				<meta
					property="twitter:description"
					content="This the personal portfolio of Azddine Elmoumny, which summarizes everything he had studied in CERMEF"
				/>
				<meta property="twitter:image" content="/logo.png" />
			</>
		);
	},
};
