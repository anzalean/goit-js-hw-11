import { fetchImages } from './js/pixabay-api';
import { renderImages, showNoResultsMessage, showLoadingSpinner, hideLoadingSpinner } from './js/render-functions';
import iziToast from 'izitoast';

document.querySelector('#search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  
  const query = event.target.elements.searchQuery.value.trim();
  
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
        message: 'Please enter a search query!',
      theme: 'dark',
            position: 'topRight',
            backgroundColor: '#FFA000'
    });
    return;
  }

  showLoadingSpinner();
  
  fetchImages(query)
    .then(images => {
      hideLoadingSpinner();
      
      if (images.length === 0) {
        showNoResultsMessage();
      } else {
        renderImages(images);
      }
    })
    .catch(error => {
      hideLoadingSpinner();
      iziToast.error({
        title: 'Error',
          message: 'Something went wrong. Please try again later.',
          theme: 'dark',
            position: 'topRight',
            backgroundColor: '#EF4040'
      });
    });
});
