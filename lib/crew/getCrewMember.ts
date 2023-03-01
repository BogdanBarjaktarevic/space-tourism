import { prisma } from "./../../prisma/client";

export const getCrewMember = async (crewId: string) => {
  try {
    const crewMember = await prisma.crew.findMany({
      where: { id: Number(crewId) },
    });
    return crewMember;
  } catch (error) {
    throw { err: "Error has occured while fetching crew" };
  }
};
