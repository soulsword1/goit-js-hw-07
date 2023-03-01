import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryImages = makeGalleryImages(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryImages);
gallery.addEventListener("click", showOriginalImage);

function makeGalleryImages(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    )
    .join("");
}

function showOriginalImage(e) {
  if (!e.target.nodeName === "IMAGE") {
    return;
  }
  e.preventDefault();
  const imgUrl = e.target.dataset.source;

  imgModal(imgUrl);
}

//basicLightbox gallery
function imgModal(img) {
  const instance = basicLightbox.create(`
    <img src="${img}" width="800" height="600">
`);
  instance.show();

  document.addEventListener("keydown", imgModalClose);

  function imgModalClose(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
