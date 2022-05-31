import React from "react";
import styled from "styled-components";
import Router from "next/router";
import { Breakpoint } from "../styles/constans";

interface Props {
	currentPlanet?: string;
	planetPaths: string[];
	toggleMenu?: () => void;
}

const Nav = ({ planetPaths, toggleMenu, currentPlanet }: Props) => {
	const handleClick = (path: string) => {
		if (toggleMenu) {
			toggleMenu();
		}
		Router.push("/" + path);
	};

	console.log(planetPaths, currentPlanet);

	return (
		<Container>
			<List>
				{planetPaths.map((planetPath, index) => {
					return (
						<Item
							key={index}
							onClick={() => handleClick(planetPath)}
							planet={planetPath}
							className={
								currentPlanet === planetPath ? "active" : ""
							}
						>
							{planetPath}
						</Item>
					);
				})}
			</List>
		</Container>
	);
};

const Container = styled.nav`
	padding: 24px;
	position: absolute;
	top: 61px;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--color-background);
	background-image: url("./assets/background-stars.svg");
	background-attachment: fixed;
	background-size: cover;

	@media (min-width: ${Breakpoint.TabletPortraitPx}px) {
		position: static;
		width: 100%;
		top: 0;
		padding: 0;
	}

	@media (min-width: ${Breakpoint.LaptopPx}px) {
		width: auto;
	}
`;

const List = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;

	@media (min-width: ${Breakpoint.TabletPortraitPx}px) {
		display: flex;
		justify-content: space-between;
	}

	@media (min-width: ${Breakpoint.LaptopPx}px) {
		gap: 33px;
	}
`;

interface ItemProps {
	planet: string;
}

const Item = styled.li<ItemProps>`
	font-size: 15px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	padding: 20px 0 20px 45px;
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		color: rgba(255, 255, 255, 0.5);
	}

	&::before {
		content: "";
		width: 20px;
		height: 20px;
		background-color: ${(props) => {
			return `var(--color-${props.planet})`;
		}};
		border-radius: 50%;
		position: absolute;
		left: 25px;
	}

	&::after {
		content: "";
		width: 20px;
		height: 20px;
		position: absolute;
		right: 25px;
		background: url("./assets/icon-chevron.svg") no-repeat center;
	}

	&:last-child {
		border-bottom: none;
	}

	& a {
		color: #fff;
		text-decoration: none;
	}

	@media (min-width: ${Breakpoint.TabletPortraitPx}px) {
		padding: 0;
		line-height: 1;
		border: none;
		font-size: 12px;

		&::before,
		&::after {
			display: none;
		}
	}

	@media (min-width: ${Breakpoint.LaptopPx}px) {
		padding-block: 30px 32px;
		border-top: 4px solid transparent;

		&.active,
		&:hover {
			border-top: ${(props) => {
				return `4px solid var(--color-${props.planet})`;
			}};
		}
	}
`;

export default Nav;
