import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
export default {
	toc: {
		title: "Dans Ce page",
	},
	editLink: { text: "" },
	logo: (
		<h1 className="text-5xl font-bold ">
			<span className="text-blue-500">e</span>
			PORTFOLIO
		</h1>
	),
	project: {
		link: "https://github.com/shuding/nextra",
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
			"https://my-app.com" +
			(defaultLocale === locale ? asPath : `/${locale}${asPath}`);

		return (
			<>
				<meta property="og:url" content={url} />
				<meta
					property="og:title"
					content={frontMatter.title || "Elmoumny"}
				/>
				<meta
					property="og:description"
					content={frontMatter.description || "Emoumny's portfolio"}
				/>
			</>
		);
	},
};
