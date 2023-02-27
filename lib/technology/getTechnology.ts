import { TechnologyModel } from "@/types/technology";

export const getTechnology = async (): Promise<TechnologyModel[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/technology`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
