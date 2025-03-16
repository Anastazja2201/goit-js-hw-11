import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const input = document.querySelector('input[name="search-text"]');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const searchQuery = input.value.trim();

    if (searchQuery === '') {
      iziToast.error({
        message: 'Please enter a search term!',
      });
      return;
    }

    showLoader();
    const images = await fetchImages(searchQuery);
    renderGallery(images);
    hideLoader();
  });
});
