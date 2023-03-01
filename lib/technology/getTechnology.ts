import { prisma } from "./../../prisma/client";

export const getTechnology = async () => {
  try {
    const tech = await prisma.technology.findMany();
    return tech;
  } catch (error) {
    throw { err: "Error has occured while fetching technology" };
  }
};
