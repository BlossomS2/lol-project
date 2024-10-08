export interface Item {
  id: string;
  name: string;
  description: string;
  image: {
    full: string;
  };
  price: number;
  stats: {
    [key: string]: number;
  };
}
