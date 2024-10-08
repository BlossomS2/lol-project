// src/utils/serverApi.ts
import { Champion } from "@/types/Champion";

export const fetchChampionList = async (): Promise<Champion[]> => {
  const response = await fetch("/api/champions"); // 로컬 API 호출

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return Object.values(data.data); // 챔피언 목록 반환
};
