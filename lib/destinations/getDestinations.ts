import { DestinationModel } from "@/types/destinations";

export const getDestinations = async (): Promise<DestinationModel[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/destinations`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
