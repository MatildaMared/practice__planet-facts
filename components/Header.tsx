import React from "react";
import styled from "styled-components";
import { Planet } from "../models/Planet";
import HamburgerIcon from "../public/assets/icon-hamburger.svg";

interface Props {
	planetName: string;
	planetPaths: string[];
}

const Header = ({ planetName, planetPaths }: Props) => {
	return (
		<Container>
			<Logo>The planets</Logo>
			<HamburgerIcon />
		</Container>
	);
};

const Container = styled.header`
	padding-inline: 24px;
	padding-block: 16px;
	border-bottom: 1px solid var(--color-gray-light);
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled.h1`
	font-family: var(--font-secondary);
	font-size: 1.75rem;
	text-transform: uppercase;
	line-height: 1;
`;

export default Header;
