'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
function chunkResult(array, size) {
  const result = [];
  for (let index = 0; index < array.length; index += size) {
    let chunk = array.slice(index, index + size);
    result.push(chunk);
  }
  return result;
}

async function findOne(ctx) {
  const { name } = ctx.params;
  const featuredProducts = await strapi.services['brand-carousel'].findOne({ page: name });
  const products = featuredProducts.products.map(a => {
    return {
      id: a._id,
      name: a.name,
      image: a.main_image,
      price: a.price
    }
  })
  console.log(chunkResult(products, 3));
  return chunkResult(products, 3);
};

module.exports = {
  findOne
};
