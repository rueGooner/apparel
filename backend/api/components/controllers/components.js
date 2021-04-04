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

const featurededProducts = async page => {
  const { products } = await strapi.services['brand-carousel'].findOne({ page: page });
  const featuredProducts = products.map(a => {
    return {
      id: a._id,
      name: a.name,
      image: a.main_image,
      price: a.price
    }
  })
  return chunkResult(featuredProducts, 3);
}

const findByPage = async (ctx) => {
  const { page } = ctx.params;
  const categories = await strapi.services.category.find();
  const featuredProducts = await featurededProducts(page);
  const navigation = categories.map(a => {
    return {
      name: a.name,
      href: a.path,
      src: a.image ? a.image.url : null
    }
  });
  return {
    navigation,
    featuredProducts
  };
}

module.exports = {
  findByPage
};
