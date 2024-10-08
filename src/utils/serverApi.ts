// utils/serverApi.ts
export const fetchItemList = async () => {
  try {
    const version = await getLatestVersion(); // 최신 버전 가져오기
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch items"); // 에러를 던지기 전에 콘솔에 로그
  }
};
