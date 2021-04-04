import React from 'react'
import { axiosAPI, fetchPageContent } from '../services/api'
import { fetchFeaturedProducts } from '../utils/featured-carousel'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import FeaturedCategories from '../components/FeaturedCategories'

export default function index({ navigation, featuredProducts }) {
  return (
    <Layout navigation={navigation}>
      <Carousel featuredProducts={featuredProducts} />
      <FeaturedCategories />
    </Layout>
  )
}

export async function getStaticProps() {
  // const response = await axiosAPI('/categories');
  const { data } = await fetchPageContent('/pages/home');
  const navigation = data.navigation;
  console.log(data);
  const featuredProducts = data['brand-carousel'];
  return {
    props: { navigation, featuredProducts }
  };
}
