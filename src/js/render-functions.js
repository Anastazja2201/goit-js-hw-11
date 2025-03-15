import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

export const renderGallery = (images) => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; 

  if (images.length === 0) {
    iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  images.forEach(image => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery-item');
    
    listItem.innerHTML = `
      <a href="${image.largeImageURL}" class="gallery-link">
        <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" />
        <div class="info">
          <p class="info-item">
            <b>Likes:</b> ${image.likes}
          </p>
          <p class="info-item">
            <b>Views:</b> ${image.views}
          </p>
          <p class="info-item">
            <b>Comments:</b> ${image.comments}
          </p>
          <p class="info-item">
            <b>Downloads:</b> ${image.downloads}
          </p>
        </div>
      </a>
    `;
    
    gallery.appendChild(listItem);
  });

  const lightbox = new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
};

export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block'; 
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none'; 
};
