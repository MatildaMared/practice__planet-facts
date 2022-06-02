import React, { useState } from "react";
import { Planet } from "../models/Planet";
import styled from "styled-components";
import IconSource from "./../public/assets/icon-source.svg";
import { useWidth } from "../hooks/useWidth";
import { Breakpoint } from "../styles/constans";
import { Data } from "../models/Data";
import PlanetNav from "./PlanetNav";

interface Props {
	planetData: Planet;
}

const PlanetInfo = ({ planetData }: Props) => {
	const [currentData, setCurrentData] = useState<Data>(Data.Overview);
	const windowWidth = useWidth();

	console.log(planetData);

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
					src={
						currentData === Data.Structure
							? planetData.images.internal
							: planetData.images.planet
					}
				/>
				{currentData === Data.Surface && (
					<GeologyImage src={planetData.images.geology} />
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
			<Information>
				<InformationItem>
					<h3>Rotation</h3>
					<p>{planetData.rotation}</p>
				</InformationItem>
				<InformationItem>
					<h3>Revolution Time</h3>
					<p>{planetData.revolution}</p>
				</InformationItem>
				<InformationItem>
					<h3>Radius</h3>
					<p>{planetData.radius}</p>
				</InformationItem>
				<InformationItem>
					<h3>Average temp.</h3>
					<p>{planetData.temperature}</p>
				</InformationItem>
			</Information>
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
	position: relative;
	z-index: -1;
	display: flex;
	flex-direction: column;

	&.extra-space {
		margin-bottom: 4rem;
	}

	@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
		margin-bottom: 3rem;
	}
`;

const PlanetImage = styled.img`
	width: auto;
	height: auto;
`;

const GeologyImage = styled.img`
	position: absolute;
	width: 40%;
	max-width: 200px;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 30%);
`;

const DataContainer = styled.div`
	display: flex;
	padding-inline: 24px;
	align-items: center;
	gap: 2rem;

	@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
		margin-bottom: 26px;
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
		text-align: left;
		margin-inline: 0;
	}
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

const Information = styled.ul`
	margin: 0;
	padding: 24px;
	list-style: none;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;

	@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
		flex-direction: row;
	}
`;

const InformationItem = styled.li`
	padding: 16px 24px;
	border: 1px solid var(--color-gray);
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
		width: 100%;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		gap: 8px;
	}

	& h3 {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: var(--color-gray-light);
	}

	& p {
		font-size: 1.25rem;
		font-family: var(--font-secondary);

		@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
			font-size: 1.5rem;
		}
	}
`;

export default PlanetInfo;
