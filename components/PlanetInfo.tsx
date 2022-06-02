import React, { useState } from "react";
import { Planet } from "../models/Planet";
import styled from "styled-components";
import IconSource from "./../public/assets/icon-source.svg";
import { useWidth } from "../hooks/useWidth";
import { Breakpoint } from "../styles/constans";

interface Props {
	planetData: Planet;
}

enum Data {
	Overview = "overview",
	Surface = "surface",
	Structure = "structure",
}

const PlanetInfo = ({ planetData }: Props) => {
	const [currentData, setCurrentData] = useState<Data>(Data.Overview);
	const windowWidth = useWidth();
	console.log(planetData);
	return (
		<Container>
			<Nav>
				<NavItem
					planetName={planetData.name.toLowerCase()}
					className={currentData === Data.Overview ? "active" : ""}
					onClick={() => setCurrentData(Data.Overview)}
				>
					Overview
				</NavItem>
				<NavItem
					planetName={planetData.name.toLowerCase()}
					className={currentData === Data.Structure ? "active" : ""}
					onClick={() => setCurrentData(Data.Structure)}
				>
					{windowWidth >= Breakpoint.TabletLandscapePx
						? "Internal Structure"
						: "Structure"}
				</NavItem>
				<NavItem
					planetName={planetData.name.toLowerCase()}
					className={currentData === Data.Surface ? "active" : ""}
					onClick={() => setCurrentData(Data.Surface)}
				>
					{windowWidth >= Breakpoint.TabletLandscapePx
						? "Surface Geology"
						: "Geology"}
				</NavItem>
			</Nav>
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
			<Heading>{planetData.name}</Heading>
			<Text>
				{currentData === "overview" && planetData.overview.content}
				{currentData === "surface" && planetData.geology.content}
				{currentData === "structure" && planetData.structure.content}
			</Text>
			<Source>
				Source:{" "}
				<Link href={planetData.overview.source} target="blank">
					Wikipedia
					<IconSource />
				</Link>
			</Source>
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

const Nav = styled.nav`
	width: 100%;
	border-bottom: 1px solid var(--color-gray);
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

interface NavItemProps {
	planetName: string;
}

const NavItem = styled.button<NavItemProps>`
	padding: 20px 0;
	color: #fff;
	font-size: 0.875rem;
	text-transform: uppercase;
	border: none;
	background: none;
	border-bottom: 4px solid transparent;
	transition: all 0.2s;
	cursor: pointer;

	&.active,
	&:hover {
		border-bottom: 4px solid
			${(props) => `var(--color-${props.planetName})`};
	}
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
`;

const PlanetImage = styled.img`
	width: auto;
	height: auto;
`;

const GeologyImage = styled.img`
	position: absolute;
	width: 40%;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 30%);
`;

const Text = styled.p`
	font-size: 0.875rem;
	margin-inline: 24px;
	text-align: center;
	margin-bottom: 1rem;
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
`;

const InformationItem = styled.li`
	padding: 16px 24px;
	border: 1px solid var(--color-gray);
	display: flex;
	align-items: center;
	justify-content: space-between;

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
	}
`;

export default PlanetInfo;
