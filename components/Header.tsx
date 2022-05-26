import React from "react";
import styled from "styled-components";
import { Planet } from "../models/Planet";

interface Props {
	planets: Planet[];
}

const Header = ({ planets }: Props) => {
	console.log(planets);
	return <Container>Header</Container>;
};

const Container = styled.header`
	font-family: var(--font-secondary);
`;

export const getStaticProps = async () => {
	const response = await fetch("http://localhost:3000/api/planets");
	console.log(response);
	const planets = await response.json();

	return {
		props: {
			planets,
		},
	};
};

export default Header;
