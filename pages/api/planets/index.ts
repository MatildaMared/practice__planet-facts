// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import planets from "../../../data.json";
import { Planet } from "../../../models/Planet";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Planet[]>
) {
	res.status(200).json(planets);
}
