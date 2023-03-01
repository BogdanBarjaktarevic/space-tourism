import { prisma } from "./../../prisma/client";

export const getCrew = async () => {
  try {
    const crew = await prisma.crew.findMany();
    return crew;
  } catch (error) {
    throw { err: "Error has occured while fetching crew" };
  }
};
