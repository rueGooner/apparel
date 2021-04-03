import axios from 'axios';

async function getBackendPoint(path = '') {
  return `${process.env.STRAPI_URL}${path}`
}

export async function axiosAPI(path) {
  const endpoint = await getBackendPoint(path);
  const response = await axios.get(endpoint);
  return response;
}
