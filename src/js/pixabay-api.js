const API_KEY = '45205333-a930dfeeeabac87545cb9c1b9';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.hits);
}