import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const input = document.querySelector('input[name="search-text"]');

  hideLoader();

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
    try {
      const images = await fetchImages(searchQuery);

      if (images.length === 0) {
        iziToast.warning({
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderGallery(images);
      }
    } catch (error) {
      iziToast.error({
        message:
          'An error occurred while fetching images. Please try again later.',
      });
      console.error('Error fetching images:', error);
    } finally {
      hideLoader();
    }
  });
});
