import type { GetStaticPropsContext, NextPage } from "next";
import { GetStaticProps } from "next";
import planets from "./../../data.json";
import styled from "styled-components";
import { Planet } from "./../../models/Planet";
import Header from "./../../components/Header";
import Meta from "../../components/Meta";
import PlanetInfo from "../../components/PlanetInfo";

interface Props {
	currentPlanet: string;
	planetPaths: string[];
	planetData: Planet;
}

const PlanetPage: NextPage<Props> = ({
	currentPlanet,
	planetPaths,
	planetData,
}: Props) => {
	return (
		<>
			<Meta title={`Planets Info 🌎 ${planetData.name}`} />
			<Header currentPlanet={currentPlanet} planetPaths={planetPaths} />
			<PlanetInfo planetData={planetData} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext
) => {
	const currentPlanet = context.params!.planet || "";
	const planetPaths: string[] = planets.map((planet) =>
		planet.name.toLowerCase()
	);
	const planetData = planets.filter(
		(planet) => planet.name.toLowerCase() === currentPlanet
	)[0];

	return {
		props: {
			currentPlanet,
			planetPaths,
			planetData,
		},
	};
};

export const getStaticPaths = async () => {
	const planetNames = planets.map((planet) => planet.name.toLowerCase());
	const paths = planetNames.map((name) => {
		return {
			params: {
				planet: name,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export default PlanetPage;
