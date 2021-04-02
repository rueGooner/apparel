'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findFeaturedCategories: async ctx => {
    const findFeaturedCategories = await strapi.query('category').model.find({ isFeatured: true });
    return findFeaturedCategories;
  }
};
