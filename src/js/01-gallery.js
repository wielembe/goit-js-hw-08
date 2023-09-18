import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryElements = galleryItems
  .map(picture => {
    return `<a class="gallery__item" href="${picture.original}">
       <img
        class="gallery__image"
         src="${picture.preview}"

         alt="${picture.description}"
       />
     </a>
   `;
  })
  .join('');

galleryList.innerHTML = galleryElements;

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'self',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
