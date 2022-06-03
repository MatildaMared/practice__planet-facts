import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import styled from "styled-components";
import Header from "../components/Header";
import Meta from "../components/Meta";
import PlanetInfo from "../components/PlanetInfo";
import { Planet } from "../models/Planet";
import planets from "./../data.json";

interface Props {
	currentPlanet: string;
	planetPaths: string[];
	planetData: Planet;
}

const Home: NextPage<Props> = ({
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
	const planetData = planets[0];
	const currentPlanet = planetData.name.toLowerCase();
	const planetPaths: string[] = planets.map((planet) =>
		planet.name.toLowerCase()
	);

	return {
		props: {
			currentPlanet,
			planetPaths,
			planetData,
		},
	};
};

export default Home;
