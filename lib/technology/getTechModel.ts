import { prisma } from "./../../prisma/client";

export const getTechModel = async (modelId: string) => {
  try {
    const techModel = await prisma.technology.findMany({
      where: { id: Number(modelId) },
    });
    return techModel;
  } catch (error) {
    throw { err: "Error has occured while fetching techModel" };
  }
};
