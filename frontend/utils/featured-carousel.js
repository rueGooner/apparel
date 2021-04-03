import { axiosAPI } from '../services/api'

export async function fetchFeaturedProducts(page) {
  const featuredProducts = await axiosAPI(`/brand-carousels${page}`);
  return featuredProducts.data;
}