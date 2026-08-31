export type CategoryType = {
  id: string | number;
  name: string;
};

export type Products = {
  id: string | number,
  title: string,
  price: number,
  category : CategoryType,
  images: string[],

}

