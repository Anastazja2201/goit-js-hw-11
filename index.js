import{a as i,i as c,S as l}from"./assets/vendor-DtRopbQG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const d="49358433-5727c4bf05d17bed3943eaf07",u=async r=>{try{return(await i.get("https://pixabay.com/api/",{params:{key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(o){return console.error("Error fetching images:",o),[]}},m=r=>{const o=document.querySelector(".gallery");if(o.innerHTML="",r.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}r.forEach(t=>{const e=document.createElement("li");e.classList.add("gallery-item"),e.innerHTML=`
      <a href="${t.largeImageURL}" class="gallery-link">
        <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-image" />
        <div class="info">
          <p class="info-item">
            <b>Likes:</b> ${t.likes}
          </p>
          <p class="info-item">
            <b>Views:</b> ${t.views}
          </p>
          <p class="info-item">
            <b>Comments:</b> ${t.comments}
          </p>
          <p class="info-item">
            <b>Downloads:</b> ${t.downloads}
          </p>
        </div>
      </a>
    `,o.appendChild(e)}),new l(".gallery a",{captionSelector:"img",captionsData:"alt",captionDelay:250}).refresh()},f=()=>{const r=document.querySelector(".loader");r.style.display="block"},p=()=>{const r=document.querySelector(".loader");r.style.display="none"};document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".form"),o=document.querySelector('input[name="search-text"]');r.addEventListener("submit",async n=>{n.preventDefault();const t=o.value.trim();if(t===""){iziToast.error({message:"Please enter a search term!"});return}f();const e=await u(t);m(e),p()})});
//# sourceMappingURL=index.js.map
