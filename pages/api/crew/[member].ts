import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const crewId = req.query.member;
    try {
      const destination = await prisma.crew.findMany({
        where: { id: Number(crewId) },
      });
      return res.status(200).json(destination);
    } catch (error) {
      res.status(403).json({ err: "Error has occured while fetching crew" });
    }
  }
}
