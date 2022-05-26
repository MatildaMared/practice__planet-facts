import type {
	GetStaticPropsContext,
	GetStaticPropsResult,
	NextPage,
} from "next";
import { GetStaticProps } from "next";
import planets from "./../../data.json";
import styled from "styled-components";
import { Planet } from "./../../models/Planet";
import Header from "./../../components/Header";
import Meta from "../../components/Meta";

interface Props {
	planetName: string;
	planetPaths: string[];
	planetData: Planet;
}

const PlanetPage: NextPage<Props> = ({
	planetName,
	planetPaths,
	planetData,
}: Props) => {
	console.log(planetName);
	console.log(planetPaths);
	console.log("Planet data: ", planetData);

	return (
		<>
			<Meta title={`Planets Info 🌎 ${planetData.name}`} />
			<Header planetName={planetName} planetPaths={planetPaths} />
			<div>PlanetPage</div>;
		</>
	);
};

export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext
) => {
	const planetName = context.params!.planet || "";
	const planetPaths: string[] = planets.map((planet) =>
		planet.name.toLowerCase()
	);
	const planetData = planets.filter(
		(planet) => planet.name.toLowerCase() === planetName
	)[0];

	return {
		props: {
			planetName,
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
