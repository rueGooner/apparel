import React from 'react'
import { axiosAPI } from '../services/api'
import { fetchFeaturedProducts } from '../utils/featured-carousel'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import FeaturedCategories from '../components/FeaturedCategories'

export default function index({ navItems, featuredProducts }) {
  return (
    <Layout navItems={navItems}>
      <Carousel featuredProducts={featuredProducts} />
      <FeaturedCategories />
    </Layout>
  )
}
export async function getStaticProps() {
  const response = await axiosAPI('/categories');
  const featuredProducts = await fetchFeaturedProducts('/home');
  const navItems = response.data.map(a => {
    return {
      name: a.name,
      href: a.path,
      src: a.image ? a.image.url : null
    }
  });
  return {
    props: { navItems, featuredProducts }
  };
}
