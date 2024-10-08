export interface Champion {
  id: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
    group: string;
  };
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
}

export interface ChampionDetail extends Champion {
  lore: string;
  spells: Array<{
    id: string;
    name: string;
    description: string;
    tooltip: string;
    levelTip: {
      label: string[];
      effect: number[][];
    };
    vars: Array<{ link: string; coeff: number[] }>;
  }>;
}
