import React from "react";
import { Planet } from "../models/Planet";
import styled from "styled-components";
import IconSource from "./../public/assets/icon-source.svg";

interface Props {
	planetData: Planet;
}

const PlanetInfo = ({ planetData }: Props) => {
	console.log(planetData);
	return (
		<Container>
			<ImageWrapper>
				<PlanetImage src={planetData.images.planet} />
			</ImageWrapper>
			<Heading>{planetData.name}</Heading>
			<Text>{planetData.overview.content}</Text>
			<Source>
				Source:{" "}
				<Link href={planetData.overview.source} target="blank">
					Wikipedia
					<IconSource />
				</Link>
			</Source>
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
	margin-bottom: 16px;
`;

const ImageWrapper = styled.figure`
	padding: 2rem;
	display: flex;
	justify-content: center;
	border: 1px solid red;
`;

const PlanetImage = styled.img`
	width: auto;
	height: auto;
`;

const Text = styled.p`
	font-size: 0.875rem;
	margin-inline: 24px;
	text-align: center;
`;

const Source = styled.p`
	color: var(--color-gray-light);
	display: flex;
	align-items: center;
	gap: 8px;
`;

const Link = styled.a`
	display: flex;
	color: var(--color-gray-light);
	font-weight: bold;
	align-items: center;
	gap: 4px;
	transition: all 0.2s;

	&:hover {
		color: var(--color-gray);
	}
`;

export default PlanetInfo;
