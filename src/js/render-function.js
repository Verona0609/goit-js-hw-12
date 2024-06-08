// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";





export function renderImages(images){  
  const gallery = document.querySelector(".gallery");
  const markup = images.map(image =>

`<a href="${image.largeImageURL}"  class="gallery-item" >
<img src="${image.webformatURL}" alt="${image.tags}" />
<div class="info">¨
  <p class="info-title">Likes: <span class="info-value">${image.likes}</span> </p>
  <p class="info-title">Views: <span class="info-value">${image.views}</span></p>
  <p class="info-title">Comments: <span class="info-value">${image.comments}</span></p>
  <p class="info-title">Downloads: <span class="info-value">${image.downloads}</span></p>
</div>
</a>`
  ).join(``);
  gallery.insertAdjacentHTML("beforeend", markup);
  new SimpleLightbox(".gallery a").refresh();
};


export function showLoading(){
  document.querySelector(".loader").style.display = "block";
}

export function hideLoading(){
  document.querySelector(".loader").style.display = "none";
}

export function showError(message){
  iziToast.error({
    title:"Error",
    message: message,
    posision:"topRight"

  })

};

export const clearGallery= ()=>{
  document.querySelector(".gallery").innerHTML = "";

};


export const toggleLoadMoreButton = (show)=>{
  const loadMoreBtn = document.querySelector(".load-more");
  loadMoreBtn.style.display = show ? "block" : "none";
}
export const smoothScroll = ()=>{
  const {
    height: cardHeight
  } = document.querySelector(".gallery").firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
  });
};