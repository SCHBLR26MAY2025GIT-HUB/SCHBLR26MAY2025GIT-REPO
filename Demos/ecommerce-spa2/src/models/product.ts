export interface Product {
  id: number;
  name: string;
  price: number;
  // the tags // are optional, so we can use the ? operator
  tags?: string[];
  onSale: boolean;
}