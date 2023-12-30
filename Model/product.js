const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const filePath = path.join('data', 'products.json');

    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        try {
          products = JSON.parse(fileContent);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
      products.push(this); // Adding the current product to the products array
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        if (err) {
          console.error('Error writing file:', err);
        }
      });
    });
  }

  static fetchAll(callback) {
    const filePath = path.join('data', 'products.json');

    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        console.error('Error reading file:', err);
        return callback([]); // Return an empty array in case of error
      }
      try {
        const products = JSON.parse(fileContent);
        callback(products); // Return parsed JSON content
      } catch (error) {
        console.error('Error parsing JSON:', error);
        callback([]); // Return an empty array if JSON parsing fails
      }
    });
  }
};
