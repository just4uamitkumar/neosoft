export type ProductType = {
  id: number;
  title: string;
  image: string;
  description: string;
  rating: Rating;
};
export type Rating = {
  rate: number;
  count: number;
};
