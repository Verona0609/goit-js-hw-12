import{a as f,S as p,i as y}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const m=async(e,o=1,s=15)=>{const r=`https://pixabay.com/api/?${params}`;try{return(await f.get(r,{params:{key:"44189121-1bd84ab9c2376b17257837ab7",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:s}})).data}catch(a){throw console.error("Error fetching images :",a),a}};function h(e){const o=document.querySelector(".gallery");o.innerHTML=e.map(s=>`<a href="${s.largeImageURL}"  class="gallery-item" >
<img src="${s.webformatURL}" alt="${s.tags}" />
<div class="info">¨
  <p class="info-title">Likes: <span class="info-value">${s.likes}</span> </p>
  <p class="info-title">Views: <span class="info-value">${s.views}</span></p>
  <p class="info-title">Comments: <span class="info-value">${s.comments}</span></p>
  <p class="info-title">Downloads: <span class="info-value">${s.downloads}</span></p>
</div>
</a>`).join(""),o.insertAdjacentHTML("beforeend",markup),new p(".gallery a").refresh()}function g(){document.querySelector(".loader").style.display="block"}function c(){document.querySelector(".loader").style.display="none"}function l(e){y.error({title:"Error",message:e,posision:"topRight"})}const L=()=>{document.querySelector(".gallery").innerHTML=""},u=e=>{const o=document.querySelector(".load-more");o.style.display=e?"block":"none"},b=()=>{const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})},q=document.querySelector(".form"),v=document.querySelector(".load-more");let w="",n="";q.addEventListener("submit",async e=>{if(e.preventDefault(),!e.target.elements.query.value.trim()){l("Please enter a search query!");return}n=1,L(),await d()});const d=async()=>{g();try{const e=await m(w,n);if(c(),e.hits.lenght===0&&pade===1){l("Sorry, there are no images matching your search query. Please try again!");return}h(e.hits),n+=1,v.addEventListener("click",d),n*15>=e.totalHits?(u(!1),iziToast.info({title:"Error",message:"We are sorry, but you have reached the end of search results.",position:"topRight"})):u(!0),b()}catch{c(),l("Failed to fetch images. Please try again later!")}console.log(error)};
//# sourceMappingURL=commonHelpers.js.map