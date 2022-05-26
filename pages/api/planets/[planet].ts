import type { NextApiRequest, NextApiResponse } from "next";
import planets from "../../../data.json";
import { Planet } from "../../../models/Planet";

interface ErrorResponse {
	message: string;
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Planet | ErrorResponse>
) {
	const { planet } = req.query;

	const filteredPlanets = planets.filter(
		(p) => p.name.toLowerCase() === planet
	);

	if (filteredPlanets.length > 0) {
		res.status(200).json(filteredPlanets[0]);
	} else {
	}
	res.status(404).json({
		message: `Could not find planet with name ${planet}`,
	});
}
