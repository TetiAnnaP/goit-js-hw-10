!function(){function e(e){return fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(e,"&api_key=live_WGpERyCymY4ZJFOEAc7FJ53chPG0U6mKQJKOS767zsK1Fm41tD1kRy0IlWZ3w0T6")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}var t=document.querySelector(".breed-select"),n=document.querySelector(".cat-info"),c=document.querySelector(".loader"),a=document.querySelector(".cat-info"),r=document.querySelector(".error");function o(){c.classList.remove("show")}function i(){a.classList.remove("hidden")}function s(){r.classList.add("hidden")}function d(){r.classList.remove("hidden")}fetch("https://api.thecatapi.com/v1/breeds").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){var n=e.map((function(e){var t=e.id,n=e.name;return'<option value="'.concat(t,'">').concat(n,"</option>")})).join("");t.insertAdjacentHTML("beforeend",n),o(),s()})).catch((function(e){console.log("Error:",e),o(),d()})),t.addEventListener("change",(function(r){r.preventDefault(),breedId=t.value,a.classList.add("hidden"),c.classList.add("show"),e(breedId).then((function(e){var t=function(e){var t=e.imgUrl,n=e.catName,c=e.catDescription,a=e.catTemperament;return"<img class='cat-image' src=\"".concat(t,'" alt="').concat(n,"\" width='500' />\n      <div class=\"cat-details\">\n  <h1 class='cat-name'>").concat(n,"</h1>\n      <p class='cat-description'>").concat(c,'</p>\n      <p class="cat-temperament"><b>Temperament:</b> ').concat(a,"</p> </div>")}({imgUrl:e[0].url,catName:e[0].breeds[0].name,catDescription:e[0].breeds[0].description,catTemperament:e[0].breeds[0].temperament});n.innerHTML=t,o(),i(),s()})).catch((function(e){console.log("Error:",e),o(),i(),d()}))}))}();
//# sourceMappingURL=index.e1b5e7e6.js.map
