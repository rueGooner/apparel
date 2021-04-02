import React from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import FeaturedCategories from '../components/FeaturedCategories'

export default function index({ navItems }) {
  return (
    <Layout navItems={navItems}>
      <Carousel />
      <FeaturedCategories />
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get('http://localhost:1337/categories');
  const navItems = response.data.map(a => {
    return {
      name: a.name,
      href: a.path,
      src: a.image ? a.image.url : null
    }
  });
  const featured = response.data.filter(a => a.isFeatured);
  console.log(featured);
  return {
    props: { navItems }
  };
}
