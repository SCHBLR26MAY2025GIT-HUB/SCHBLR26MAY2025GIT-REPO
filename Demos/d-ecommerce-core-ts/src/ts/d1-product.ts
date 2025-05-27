interface Product {
  id: string;
  title: string;
//   price: number;

}

const product: Product = {
  id: '123',
  title: 'Smartphone',
 // price: 'not-a-number', // TypeScript flags this as an error
//  quantity : 10
//
};

const prodouct1 = {
  id: '123',
    title: 'Smartphone',
    // price: 'not-a-number', // TypeScript flags this as an error
    quantity: 10, // TypeScript infers this as a number
    decription : 'A high-end smartphone with a sleek design and powerful features.'
};