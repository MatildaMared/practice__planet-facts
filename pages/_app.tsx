import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { GlobalStyles } from "../styles/globalStyles";
import { Reset } from "../styles/reset";
import { Variables } from "../styles/variables";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Variables />
			<Reset />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
