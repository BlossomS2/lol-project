import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const ChampionsPage = async () => {
  const champions = await fetchChampionList();

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-5">챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(champions).map(([key, champion]) => (
          <Link key={key} href={`/champions/${champion.id}`}>
            <div className="border p-4 text-center">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                alt={champion.name}
                width={200}
                height={300}
              />
              <h2>{champion.name}</h2>
              <p>{champion.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChampionsPage;
