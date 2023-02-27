import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const crew = await prisma.crew.findMany();
      return res.status(200).json(crew);
    } catch (error) {
      res.status(403).json({ err: "Error has occured while fetching crew" });
    }
  }
}