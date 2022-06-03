import React from "react";
import styled from "styled-components";
import { useWidth } from "../hooks/useWidth";
import { Data } from "../models/Data";
import { Planet } from "../models/Planet";
import { Breakpoint } from "../styles/constans";

interface Props {
	planetData: Planet;
	currentData: Data;
	setCurrentData: (data: Data) => void;
}

const PlanetNav = ({ planetData, currentData, setCurrentData }: Props) => {
	const windowWidth = useWidth();

	return (
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
	);
};

const Nav = styled.nav`
	min-width: max-content;
	width: 100%;
	border-bottom: 1px solid var(--color-gray);
	display: flex;
	align-items: center;
	justify-content: space-around;
	counter-reset: listCounter;

	@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
		max-width: 300px;
		flex-direction: column;
		gap: 16px;
	}

	@media screen and (min-width: ${Breakpoint.LaptopPx}px) {
		max-width: 100%;
	}
`;

interface NavItemProps {
	planetName: string;
}

const NavItem = styled.button<NavItemProps>`
	counter-increment: listCounter;
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

	@media screen and (min-width: ${Breakpoint.TabletPortraitPx}px) {
		width: 100%;
		padding: 12px 24px;
		font-weight: bold;
		letter-spacing: 1px;
		border: 1px solid var(--color-gray);
		text-align: left;

		&::before {
			content: counter(listCounter, decimal-leading-zero);
			display: inline-block;
			margin-right: 16px;
			color: rgba(255, 255, 255, 0.6);
		}

		&.active {
			background-color: ${(props) => `var(--color-${props.planetName})`};
			border: 1px solid var(--color-gray);
		}

		&:hover {
			background-color: var(--color-gray);
			border: 1px solid var(--color-gray);
		}
	}
`;

export default PlanetNav;
