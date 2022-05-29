import React, { useState } from "react";
import styled from "styled-components";
import { useWidth } from "../hooks/useWidth";
import { Planet } from "../models/Planet";
import HamburgerIcon from "../public/assets/icon-hamburger.svg";
import { Breakpoint } from "../styles/constans";
import Nav from "./Nav";

interface Props {
	planetName: string;
	planetPaths: string[];
}

const Header = ({ planetName, planetPaths }: Props) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const windowWidth = useWidth();

	const toggleMenu = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	return (
		<>
			<Container>
				<Logo>The planets</Logo>
				{windowWidth > Breakpoint.TabletPortraitPx ? (
					<Nav planetPaths={planetPaths} />
				) : (
					<MenuButton
						onClick={toggleMenu}
						className={menuIsOpen ? "open" : ""}
					>
						<HamburgerIcon />
					</MenuButton>
				)}
			</Container>
			{menuIsOpen && windowWidth < Breakpoint.TabletPortraitPx && (
				<Nav toggleMenu={toggleMenu} planetPaths={planetPaths} />
			)}
		</>
	);
};

const Container = styled.header`
	padding-inline: 24px;
	padding-block: 16px;
	border-bottom: 1px solid var(--color-gray-light);
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	height: 61px;
`;

const Logo = styled.h1`
	font-family: var(--font-secondary);
	font-size: 1.75rem;
	text-transform: uppercase;
	line-height: 1;
`;

const MenuButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	padding: 0.25rem;

	&.open svg {
		opacity: 0.4;
	}
`;

export default Header;
