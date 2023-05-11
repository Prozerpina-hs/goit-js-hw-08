// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const picterListMarkup = createPicterListMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picterListMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

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
// 2. 
function onGalleryContainerClick(e) {
e.preventDefault();
  const target = e.target;
  if (target.classList.contains('gallery__image')) {
    // ссылкa на оригинальное изображение
    const imageSource = target.dataset.source;

    // Получение альтернативного текста изображения
    console.log("imageSource");
    const imageAlt = target.alt;
    

    // Создание и открытие модального окна с использованием библиотеки basicLightbox
    const instance = basicLightbox.create(`
      <div class="modal">
        <img src="${imageSource}" alt="${imageAlt}" />
      </div>
    `);
    instance.show();

    // Закрытие модального окна при клике на него или при нажатии на клавишу "Escape"
    const modalElement = document.querySelector('.modal');
    modalElement.addEventListener('click', () => {
      instance.close();
    });
    window.addEventListener('keydown', onEscKeyPress);

    function onEscKeyPress(event) {
      if (event.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', onEscKeyPress);
      }
    }
  }
}