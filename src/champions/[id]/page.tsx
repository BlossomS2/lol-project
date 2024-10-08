import { fetchChampionDetail } from "@/utils/serverApi";

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const champion = await fetchChampionDetail(params.id);

  return (
    <div>
      <h1 className="text-3xl font-bold">{champion.name}</h1>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
        alt={champion.name}
        width={300}
        height={400}
      />
      <h2 className="text-xl">{champion.title}</h2>
      <p>{champion.lore}</p>
      {/* 추가적인 정보도 여기에 표시 */}
    </div>
  );
};

export default ChampionDetailPage;
