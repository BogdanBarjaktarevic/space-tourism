import { prisma } from "./../../prisma/client";

export const getDestination = async (destinationId: string) => {
  try {
    const destination = await prisma.destinations.findMany({
      where: { id: Number(destinationId) },
    });
    return destination;
  } catch (error) {
    throw { err: "Error has occured while fetching destinations" };
  }
};
