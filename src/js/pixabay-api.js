import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '52372909-37b8becf80bbf29968de129f5';
const limit = 15;

export default async function getImagesByQuery(query, page) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: limit,
  });

  const result = await axios.get(`${API_URL}?${searchParams}`);
  const totalPages = Math.ceil(result.data.totalHits / limit);

  return { data: result.data.hits, totalPages };
}
