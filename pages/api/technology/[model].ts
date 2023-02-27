import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const modelId = req.query.model;
    try {
      const techModel = await prisma.technology.findMany({
        where: { id: Number(modelId) },
      });
      return res.status(200).json(techModel);
    } catch (error) {
      res
        .status(403)
        .json({ err: "Error has occured while fetching techModel" });
    }
  }
}
