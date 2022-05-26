import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
	return (
		<Heading>
			Welcome to <a href="https://nextjs.org">Next.js!</a>
		</Heading>
	);
};

const Heading = styled.h1`
	font-size: 5rem;
`;

export default Home;
