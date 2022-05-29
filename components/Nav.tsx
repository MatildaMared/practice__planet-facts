import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Router from "next/router";

interface Props {
	planetPaths: string[];
	toggleMenu?: () => void;
}

const Nav = ({ planetPaths, toggleMenu }: Props) => {
	const handleClick = (path: string) => {
		if (toggleMenu) {
			toggleMenu();
		}
		Router.push("/" + path);
	};

	return (
		<Container>
			<List>
				{planetPaths.map((planetPath, index) => {
					return (
						<Item
							key={index}
							onClick={() => handleClick(planetPath)}
							planet={planetPath}
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
`;

const List = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
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
`;

export default Nav;
