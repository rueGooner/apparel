'use strict';
const faker = require('faker');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

async function generateProduct() {
  return {
    name: faker.commerce.productName(),
    product_description: faker.commerce.productDescription(),
    price: faker.commerce.price()
  }
}

module.exports = {
  async create(ctx) {
    let products = [];
    for (let i = 0; i < faker.random.number({ min: 1000, max: 4000 }); i++) {

    }
    console.log('CREATE');
  }
};
