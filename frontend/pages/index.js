import React from 'react'
import axios from 'axios'
import Layout from '../components/Layout'

export default function index({ navItems }) {
  return (
    <Layout navItems={navItems}>
      <h1>LAYOUT</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get('http://localhost:1337/categories');
  const navItems = response.data.map(a => {
    return {
      name: a.name,
      src: a.path
    }
  });
  console.log(navItems);
  return {
    props: { navItems }
  };
}
