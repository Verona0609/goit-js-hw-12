import  {getArticles, perPage} from "./js/pixabay-api.js";
import { renderImages,showLoading,hideLoading,showError, clearGallery,toggleLoadMoreButton,smoothScroll } from "./js/render-function.js";





import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
/* import perPage from './js/pixabay-api' */



let query = "";
let page = 1;
let maxPage = 0;



const formEl = document.querySelector(".form")

const loadMoreBtn = document.querySelector(".load-more")


const fetchImages = async() => {
  showLoading();
   try{
    const data = await getArticles(query, page);
    hideLoading();



    if( data.hits.length === 0 && page === 1){
      showError ( "Sorry, there are no images matching your search query. Please try again!");
      return;
    }


    renderImages(data.hits);
page += 1;


maxPage = Math.ceil(data.totalHits / 15);


if (page > maxPage){
toggleLoadMoreButton(false);

iziToast.info({
  title:"Error",
  message: "We're sorry, but you've reached the end of search results.",
  position: "topRight"
})
}else{
toggleLoadMoreButton(true);
}
smoothScroll();
} catch(error){
hideLoading();
showError("Failed to fetch images. Please try again later!")
console.error(error);
toggleLoadMoreButton(false);
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
  toggleLoadMoreButton(false);
   await fetchImages();
});



loadMoreBtn.addEventListener("click", fetchImages);

toggleLoadMoreButton(false);

