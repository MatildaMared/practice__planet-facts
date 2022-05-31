import React from "react";
import { Planet } from "../models/Planet";
import styled from "styled-components";

interface Props {
	planetData: Planet;
}

const PlanetInfo = ({ planetData }: Props) => {
	console.log(planetData);
	return (
		<Container>
			<PlanetImage src={planetData.images.planet} />
			<Heading>{planetData.name}</Heading>
		</Container>
	);
};

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Heading = styled.h1`
	font-size: 2.5rem;
	font-family: var(--font-secondary);
	text-transform: uppercase;
`;

const PlanetImage = styled.img`
	max-width: 90%;
	height: auto;
`;

export default PlanetInfo;
