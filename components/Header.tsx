import React from "react";
import styled from "styled-components";
import { Planet } from "../models/Planet";
import HamburgerIcon from "../public/assets/icon-hamburger.svg";
import { Breakpoint } from "../styles/constans";

interface Props {
	planetName: string;
	planetPaths: string[];
}

const Header = ({ planetName, planetPaths }: Props) => {
	return (
		<Container>
			<Logo>The planets</Logo>
			<MenuIconContainer>
				<HamburgerIcon />
			</MenuIconContainer>
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

const MenuIconContainer = styled.div`
	@media (min-width: ${Breakpoint.TabletPortrait}) {
		display: none;
	}
`;

export default Header;
