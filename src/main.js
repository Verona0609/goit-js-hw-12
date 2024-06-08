import  {searchImages} from "./js/pixabay-api.js";
import { showLoading, hideLoading, showError, renderImages, clearGallery, toggleLoadMoreButton, smoothScroll } from "./js/render-function.js";

const formEl = document.querySelector(".form")

const loadMoreBtn = document.querySelector(".load-more")




let query = "";
let page = "";


formEl.addEventListener("submit", async(e) =>{
  e.preventDefault();

  const query = e.target.elements.query.value.trim();

  if (!query){
    showError("Please enter a search query!");
    return;
  }

  page = 1;
  clearGallery();
   await fetchImages();
});




const fetchImages = async() => {
  showLoading();
   try{
    const data = await searchImages(query, page);
    hideLoading();

    if( data.hits.lenght === 0 && pade === 1){
      showError ( "Sorry, there are no images matching your search query. Please try again!");
      return;
    }
renderImages(data.hits);
page += 1;

loadMoreBtn.addEventListener("click", fetchImages); 

if (page * 15 >= data.totalHits){
toggleLoadMoreButton(false);
iziToast.info({
  title:"Error",
  message: "We are sorry, but you have reached the end of search results.",
  position: "topRight"
})
}else{
toggleLoadMoreButton(true);
}
smoothScroll();
}catch(error){
hideLoading();
showError("Failed to fetch images. Please try again later!")
}
console.log(error);
};