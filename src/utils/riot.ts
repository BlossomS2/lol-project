import { ChampionRotation } from "@/types/ChampionRotation";

export const getChampionRotation = async (): Promise<ChampionRotation> => {
  const response = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY || "",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch champion rotation");
  }

  const data: ChampionRotation = await response.json();
  return data;
};
