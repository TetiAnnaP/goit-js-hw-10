function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}&api_key=live_WGpERyCymY4ZJFOEAc7FJ53chPG0U6mKQJKOS767zsK1Fm41tD1kRy0IlWZ3w0T6`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}const t=document.querySelector(".breed-select"),n=document.querySelector(".cat-info"),c=document.querySelector(".loader"),r=document.querySelector(".cat-info"),a=document.querySelector(".error");function s(){c.classList.remove("show")}function o(){r.classList.remove("hidden")}function i(){a.classList.add("hidden")}function d(){a.classList.remove("hidden")}fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{const n=e.map((({id:e,name:t})=>`<option value="${e}">${t}</option>`)).join("");t.insertAdjacentHTML("beforeend",n),s(),i()})).catch((e=>{console.log("Error:",e),s(),d()})),t.addEventListener("change",(function(a){a.preventDefault(),breedId=t.value,r.classList.add("hidden"),c.classList.add("show"),e(breedId).then((e=>{const t=function({imgUrl:e,catName:t,catDescription:n,catTemperament:c}){return`<img class='cat-image' src="${e}" alt="${t}" width='500' />\n      <div class="cat-details">\n  <h1 class='cat-name'>${t}</h1>\n      <p class='cat-description'>${n}</p>\n      <p class="cat-temperament"><b>Temperament:</b> ${c}</p> </div>`}({imgUrl:e[0].url,catName:e[0].breeds[0].name,catDescription:e[0].breeds[0].description,catTemperament:e[0].breeds[0].temperament});n.innerHTML=t,s(),o(),i()})).catch((e=>{console.log("Error:",e),s(),o(),d()}))}));
//# sourceMappingURL=index.a0092210.js.map
