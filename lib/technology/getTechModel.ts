import { TechnologyModel } from "@/types/technology";

export const getTechModel = async (
  model: string
): Promise<TechnologyModel[]> => {
  const res = await fetch(`${process.env.BASE_URL}/api/technology/${model}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
