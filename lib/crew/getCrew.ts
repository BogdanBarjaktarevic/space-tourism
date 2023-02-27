import { CrewModel } from "@/types/crew";

export const getCrew = async (): Promise<CrewModel[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/crew`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
