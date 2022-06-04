import React, { useState } from "react";
import { Planet } from "../models/Planet";
import styled from "styled-components";
import IconSource from "./../public/assets/icon-source.svg";
import { useWidth } from "../hooks/useWidth";
import { Breakpoint } from "../styles/constans";
import { Data } from "../models/Data";
import PlanetNav from "./PlanetNav";
import Information from "./Information";

interface Props {
	planetData: Planet;
}

const PlanetInfo = ({ planetData }: Props) => {
	const [currentData, setCurrentData] = useState<Data>(Data.Overview);
	const windowWidth = useWidth();

	return (
		<Container>
			{windowWidth < Breakpoint.TabletPortraitPx && (
				<PlanetNav
					planetData={planetData}
					currentData={currentData}
					setCurrentData={setCurrentData}
				/>
			)}
			<ImageWrapper
				className={currentData === Data.Surface ? "extra-space" : ""}
			>
				<PlanetImage
					alt={planetData.name}
					src={
						currentData === Data.Structure
							? planetData.images.internal
							: planetData.images.planet
					}
				/>
				{currentData === Data.Surface && (
					<GeologyImage
						alt={`close-up of the surface of ${planetData.name}`}
						src={planetData.images.geology}
					/>
				)}
			</ImageWrapper>
			<DataContainer>
				<DataContent>
					<Heading>{planetData.name}</Heading>
					<Text>
						{currentData === "overview" &&
							planetData.overview.content}
						{currentData === "surface" &&
							planetData.geology.content}
						{currentData === "structure" &&
							planetData.structure.content}
					</Text>
					<Source>
						Source:{" "}
						<Link href={planetData.overview.source} target="blank">
							Wikipedia
							<IconSource />
						</Link>
					</Source>
				</DataContent>
				{windowWidth >= Breakpoint.TabletPortraitPx && (
					<PlanetNav
						planetData={planetData}
						currentData={currentData}
						setCurrentData={setCurrentData}
					/>
				)}
			</DataContainer>
			<Information planetData={planetData} />
		</Container>
	);
};

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (min-width: ${Breakpoint.LaptopPx}px) {
		display: grid;
		grid-template-columns: 1fr auto;
		flex-direction: row;
		max-width: 1200px;
		margin-inline: auto;
		gap: 64px;
		margin-top: 64px;
		padding-bottom: 64px;
	}
`;

const Heading = styled.h1`
	font-size: 2.5rem;
	font-family: var(--font-secondary);
	text-transform: uppercase;
	margin-bottom: 16px;

	@media screen and (min-width: ${Breakpoint.LaptopPx}px) {
		font-size: 5rem;
	}
`;

const ImageWrapper = styled.figure`
	padding: 4rem;
	display: flex;
	justify-content: center;
	position: relative;
	z-index: -1;
	display: flex;
	flex-direction: column;

	&.extra-space {
		margin-bottom: 4rem;
	}

	@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
		margin-bottom: 3rem;
		margin-top: 2rem;
	}

	@media screen and (min-width: ${Breakpoint.LaptopPx}px) {
		place-self: center;
	}
`;

const PlanetImage = styled.img`
	width: auto;
	height: auto;
`;

const GeologyImage = styled.img`
	position: absolute;
	width: 40%;
	max-width: 150px;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 30%);

	@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
		max-width: 200px;
	}
`;

const DataContainer = styled.div`
	display: flex;
	padding-inline: 24px;
	align-items: center;
	gap: 2rem;

	@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
		margin-bottom: 26px;
	}

	@media (min-width: ${Breakpoint.LaptopPx}px) {
		flex-direction: column;
		max-width: 350px;
		padding: 0;
		margin-bottom: 0;
	}
`;

const DataContent = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
		align-items: flex-start;
	}
`;

const Text = styled.p`
	font-size: 0.875rem;
	margin-inline: 24px;
	text-align: center;
	margin-bottom: 1rem;

	@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
		font-size: 1rem;
		text-align: left;
		margin-inline: 0;
	}

	@media screen and (min-width: ${Breakpoint.LaptopPx}px) {
		font-size: 1.125rem;
	}
`;

const Source = styled.p`
	color: var(--color-gray-light);
	display: flex;
	align-items: center;
	gap: 8px;

	@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
		font-size: 1rem;
	}

	@media screen and (min-width: ${Breakpoint.LaptopPx}px) {
		font-size: 1.125rem;
	}
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
