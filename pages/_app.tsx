import type { AppContext, AppProps } from "next/app";
import App from "next/app";
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
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
