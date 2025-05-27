const product = {
  id: '123',
  title: 'Smartphone',
  price: 'not-a-number', // error appears at runtime
};

const productPrice = parseFloat(product.price);
// The isNaN function checks if the value is NaN (Not-a-Number)
// This will log an error if product.price is not a valid number
if (isNaN(productPrice)) {
  console.error('Invalid price:', product.price);
}
