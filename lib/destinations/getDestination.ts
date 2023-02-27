import { DestinationModel } from "@/types/destinations";

export const getDestination = async (
  planet: string
): Promise<DestinationModel[]> => {
  const res = await fetch(`${process.env.BASE_URL}/api/destinations/${planet}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
