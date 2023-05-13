import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const picterListMarkup = createPicterListMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', picterListMarkup);

function createPicterListMarkup(picters) {
  return picters.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
  })
    .join('');
}

const galleryLightBox = new SimpleLightbox(`.gallery__link`, {
    captionsData: "alt",
    captionDelay: 250,
  });

console.log(galleryLightBox);
console.log(galleryItems);