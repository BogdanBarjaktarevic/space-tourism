import { CrewModel } from "@/types/crew";

export const getCrewMember = async (member: string): Promise<CrewModel[]> => {
  const res = await fetch(`${process.env.BASE_URL}/api/crew/${member}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
