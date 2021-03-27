"use strict";
const faker = require("faker");
const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const brands = [
  "605d02d17c65d5653f263912",
  "605d08fa25597469519f2894",
  "605d091d25597469519f2895",
  "605d095925597469519f2896",
];

const categories = [
  "605dbc1688e17f45a534ceeb",
  "605dbc1e88e17f45a534ceec",
  "605dbc1e88e17f45a534ceec",
  "605dbc2c88e17f45a534ceee",
  "605dbc3788e17f45a534ceef",
  "605dbc4088e17f45a534cef0",
  "605dbc4488e17f45a534cef1",
  "605dbc4a88e17f45a534cef2",
];

const sizes = [
  "605dc46b6932cd493fb088cd",
  "605dc4736932cd493fb088ce",
  "605dc47a6932cd493fb088cf",
  "605dc47f6932cd493fb088d0",
  "605dc47f6932cd493fb088d0"
];

const colours = [
  "605debab6de8d44a925b614b",
  "605debb06de8d44a925b614c",
  "605debba6de8d44a925b614d",
  "605debbe6de8d44a925b614e",
  "605debc36de8d44a925b614f",
  "605debce6de8d44a925b6150",
];

function generateProduct() {
  return {
    name: `${faker.commerce.productName()} ${faker.commerce.productName()}`,
    product_description: faker.commerce.productDescription(),
    price: faker.commerce.price(1, 100, 2),
    sizes: faker.random.arrayElements(sizes),
    colours: faker.random.arrayElements(colours),
    brand: faker.random.arrayElement(brands),
    category: faker.random.arrayElements(categories),
    featured: faker.random.boolean(),
    sale: faker.random.boolean(),
    main_image: faker.random.image(),
    gallery_image_1: faker.random.image(),
    gallery_image_2: faker.random.image(),
  };
}

module.exports = {
  async create(ctx) {
    let products = [];
    for (let i = 0; i < faker.random.number({ min: 1000, max: 3000 }); i++) {
      products.push(generateProduct());
    }
    try {
      const found = await strapi.query('product').model.find();
      console.log(found.length);
      // await strapi.query('product').model.create(products);
    } catch (error) {
      console.log('ERROR', error);
    }
  },
};
