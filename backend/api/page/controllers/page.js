"use strict";
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

async function fetchNavigation() {
  const categories = await strapi.services.category.find();
  return categories.map((a) => {
    return {
      name: a.name,
      href: a.path,
      src: a.image ? a.image.url : null,
    };
  });
}

const featurededProducts = async (page) => {
  const { products } = await strapi.services["brand-carousel"].findOne({
    page: page,
  });
  const featuredProducts = products.map((a) => {
    return {
      id: a._id,
      name: a.name,
      image: a.main_image,
      price: a.price,
    };
  });
  return chunkResult(featuredProducts, 3);
};

const componentNames = async () => {
  const components = await strapi.services.components.find();
  return components.map((a) => a.name.replace(/ /g, "-").toLowerCase());
};

const fetchComponentContent = async (component, page) => {
  return component === "brand-carousel"
    ? await featurededProducts(page)
    : await strapi.services[component].findOne({ page: page });
};

const findOne = async (ctx) => {
  const { page } = ctx.params;
  const pageContent = {};
  pageContent.navigation = await fetchNavigation();
  const components = await componentNames();
  await Promise.all(
    components.map(async (componentName) => {
      const content = await fetchComponentContent(componentName, page);
      pageContent[componentName] = content;
    })
  );
  return pageContent;
};

module.exports = { findOne };
