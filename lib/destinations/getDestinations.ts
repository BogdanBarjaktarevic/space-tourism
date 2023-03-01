import { prisma } from "./../../prisma/client";

export const getDestinations = async () => {
  try {
    const destinations = await prisma.destinations.findMany();
    return destinations;
  } catch (error) {
    throw { err: "Error has occured while fetching destinations" };
  }
};
