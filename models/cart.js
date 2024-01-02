const fs = require('fs').promises;
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static async addProduct(id, productPrice) {
    try {
      // Fetch the previous cart
      const fileContent = await fs.readFile(p, 'utf-8');
      let cart = { products: [], totalPrice: 0 };

      if (fileContent) {
        cart = JSON.parse(fileContent);
      }

      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        prod => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];

      let updatedProduct;

      // Add new product / increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products.push(updatedProduct);
      }

      cart.totalPrice = cart.totalPrice + +productPrice;

      // Write the updated cart back to the file
      await fs.writeFile(p, JSON.stringify(cart));
    } catch (error) {
      console.error('Error:', error);
    }
  }
};
