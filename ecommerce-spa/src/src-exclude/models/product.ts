// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   tags?: string[];
//   onSale: boolean;
// }


// Iteration 2: Product Model and Cart Item Interface
export type Tag = 'footwear' | 'sports' | 'clothing' | 'accessories';

export interface Product {
  id: number;
  name: string;
  price: number;
  onSale?: boolean;
  salePrice?: number;
  tags?: Tag[];
  description?: string;
  imageUrl?: string;
}