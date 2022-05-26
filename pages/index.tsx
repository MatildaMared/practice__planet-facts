import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Planet } from "../models/Planet";

interface Props {
	planets: Planet[];
}

const Home: NextPage<Props> = ({ planets }: Props) => {
	console.log(planets);
	return (
		<Layout planets={planets}>
			<Heading>
				Welcome to <a href="https://nextjs.org">Next.js!</a>
			</Heading>
		</Layout>
	);
};

export const getStaticProps = async () => {
	const response = await fetch("http://localhost:3000/api/planets");
	const planets = await response.json();

	return {
		props: {
			planets,
		},
	};
};

const Heading = styled.h1`
	font-size: 5rem;
`;

export default Home;
