import React from "react";
import styled from "styled-components";
import { Planet } from "../models/Planet";

interface Props {
	planetName: string;
	planetPaths: string[];
}

const Header = ({ planetName, planetPaths }: Props) => {
	return <Container>Header</Container>;
};

const Container = styled.header`
	font-family: var(--font-secondary);
`;

export default Header;
