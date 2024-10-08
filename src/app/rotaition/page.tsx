"use client";

import { useEffect, useState } from "react";
import { getChampionRotation } from "@/utils/riot";

const RotationPage = () => {
  const [rotation, setRotation] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRotation = async () => {
      try {
        const data = await getChampionRotation();
        setRotation(data.freeChampionIds);
      } catch (err) {
        setError("챔피언 로테이션을 가져오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchRotation();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-5">현재 무료 챔피언</h1>
      <ul>
        {rotation.map((id) => (
          <li key={id}>챔피언 ID: {id}</li>
        ))}
      </ul>
    </div>
  );
};

export default RotationPage;
