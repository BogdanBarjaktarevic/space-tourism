import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const tech = await prisma.technology.findMany();
      return res.status(200).json(tech);
    } catch (error) {
      res
        .status(403)
        .json({ err: "Error has occured while fetching technology" });
    }
  }
}
