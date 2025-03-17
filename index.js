import{a as u,S as d,i as n}from"./assets/vendor-30VqbI-A.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="49358433-5727c4bf05d17bed3943eaf07",f=async s=>{try{return(await u.get("https://pixabay.com/api/",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(o){return console.error("Error fetching images:",o),[]}},c=document.querySelector(".gallery"),y=new d(".gallery a",{captionSelector:"img",captionsData:"alt",captionDelay:250}),p=s=>{if(c.innerHTML="",s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}const o=s.map(r=>`
  <li class="gallery-item">
       <a href="${r.largeImageURL}" class="gallery-link">
        <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-image" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${r.likes}</p>
          <p class="info-item"><b>Views:</b> ${r.views}</p>
          <p class="info-item"><b>Comments:</b> ${r.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </a>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()},g=()=>{document.querySelector(".loader").style.display="block"},l=()=>{document.querySelector(".loader").style.display="none"};document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".form"),o=document.querySelector('input[name="search-text"]');l(),s.addEventListener("submit",async r=>{r.preventDefault();const a=o.value.trim();if(a===""){n.error({message:"Please enter a search term!"});return}g();try{const e=await f(a);e.length===0?n.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):p(e)}catch(e){n.error({message:"An error occurred while fetching images. Please try again later."}),console.error("Error fetching images:",e)}finally{l()}})});
//# sourceMappingURL=index.js.map
