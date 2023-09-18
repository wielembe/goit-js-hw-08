import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryElements = galleryItems
  .map(picture => {
    return `<li class="gallery__item">
     <a class="gallery__link" href="${picture.original}">
       <img
        class="gallery__image"
         src="${picture.preview}"
         data-source="${picture.original}"
         alt="${picture.description}"
       />
     </a>
   </li>`;
  })
  .join('');

galleryList.innerHTML = galleryElements;

galleryList.addEventListener('click', selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const selectedImage = event.target.dataset.source;
  const openedImage = basicLightbox.create(`<img src=` + selectedImage + `>`);
  openedImage.show();

  document.addEventListener('keydown', escapePress);
  function escapePress(eventKey) {
    if (eventKey.code === 'Escape') {
      openedImage.close();
      document.removeEventListener('keydown', escapePress);
    }
  }
}
