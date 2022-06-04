import React from "react";
import styled from "styled-components";
import { Planet } from "../models/Planet";
import { Breakpoint } from "../styles/constans";

interface Props {
	planetData: Planet;
}

const Information = ({ planetData }: Props) => {
	return (
		<Container>
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
		</Container>
	);
};

const Container = styled.ul`
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

	@media (min-width: ${Breakpoint.LaptopPx}px) {
		grid-column: 1 / -1;
		padding: 0;
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
		gap: 4px;
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

	@media screen and (min-width: ${Breakpoint.LaptopPx}px) {
		padding: 24px 28px;
		gap: 0px;

		& h3 {
			font-size: 0.875rem;
		}
		& p {
			font-size: 2.5rem;
		}
	}
`;

export default Information;
