import{S as u,i as a}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="45205333-a930dfeeeabac87545cb9c1b9",m="https://pixabay.com/api/";function h(o){return fetch(`${m}?key=${f}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>r.hits)}const p=document.querySelector(".gallery");function g(o){p.innerHTML=o.map(({webformatURL:n,largeImageURL:s,tags:e,likes:t,views:i,comments:l,downloads:d})=>`
      <div class="photo-card">
        <a href="${s}" class="gallery-link">
          <img src="${n}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${t}</p>
          <p class="info-item"><b>Views</b> ${i}</p>
          <p class="info-item"><b>Comments</b> ${l}</p>
          <p class="info-item"><b>Downloads</b> ${d}</p>
        </div>
      </div>
    `).join(""),new u(".gallery a").refresh()}function y(){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",position:"topRight",backgroundColor:"#EF4040"})}function b(){document.querySelector(".loader").classList.remove("hidden")}function c(){document.querySelector(".loader").classList.add("hidden")}document.querySelector("#search-form").addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.searchQuery.value.trim();if(r===""){a.warning({title:"Warning",message:"Please enter a search query!",theme:"dark",position:"topRight",backgroundColor:"#FFA000"});return}b(),h(r).then(n=>{c(),n.length===0?y():g(n)}).catch(n=>{c(),a.error({title:"Error",message:"Something went wrong. Please try again later.",theme:"dark",position:"topRight",backgroundColor:"#EF4040"})})});
//# sourceMappingURL=commonHelpers.js.map
