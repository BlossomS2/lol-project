// import { NextResponse } from "next";

// export async function GET() {
//   try {
//     const response = await fetch(
//       "https://ddragon.leagueoflegends.com/cdn/data/en_US/champion.json"
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch champions");
//     }

//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Error fetching champions:", error); // 오류 로깅
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
