import  {searchImages} from "./js/pixabay-api.js";
import { showLoading, hideLoading, showError, renderImages, clearGallery, toggleLoadMoreButton, smoothScroll } from "./js/render-function.js";







let query = "";
let page = "";

const formEl = document.querySelector(".form")

const loadMoreBtn = document.querySelector(".load-more")






const fetchImages = async() => {
  showLoading();
   try{
    const data = await searchImages(query, page);
    hideLoading();

    if( data.hits.lenght === 0 && page === 1){
      showError ( "Sorry, there are no images matching your search query. Please try again!");
      return;
    }
renderImages(data.hits);
page += 1;



if (page * 15 >= data.totalHits){
toggleLoadMoreButton(false);
iziToast.info({
  title:"Error",
  position: "topRight"
})
}else{
toggleLoadMoreButton(true);
}
smoothScroll();
}catch(error){
hideLoading();
showError("Failed to fetch images. Please try again later!")
console.log(error);
}

};

formEl.addEventListener("submit", async(e) =>{
  e.preventDefault();

  query = e.target.elements.query.value.trim();

  if (!query){
    showError("Please enter a search query!");
    return;
  }

  page = 1;
  clearGallery();
   await fetchImages();
});



loadMoreBtn.addEventListener("click", fetchImages);