import { fetchItemList } from "@/utils/serverApi";

const ItemsPage = async () => {
  const items = await fetchItemList();

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-5">아이템 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(items).map(([key, item]) => (
          <div key={key} className="border p-4 text-center">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/img/item/${item.image.full}`}
              alt={item.name}
              width={200}
              height={200}
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
