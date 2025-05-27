"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d1_productService_1 = require("./services/d1-productService");
const product = {
    id: 'p1001',
    title: 'Wireless Mouse',
    price: 29.99, // ✅ correct type
    stock: 20,
};
try {
    const savedProduct = (0, d1_productService_1.createProduct)(product);
    console.log('Saved:', savedProduct);
}
catch (err) {
    console.error('Validation Error:', err);
}
