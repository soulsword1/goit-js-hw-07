import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryImages = makeGalleryImages(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryImages);
gallery.addEventListener("click", makeGalleryImages);

function makeGalleryImages(galleryItems) {
  return galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`
    )
    .join("");
}

//Lightbox Gallery
let galleryLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
galleryLightbox.on("show.simplelightbox");
