import { fetchBreeds } from './partials/cat-api';
import { fetchCatByBreed } from './partials/cat-api';

const selectEl = document.querySelector('.breed-select');
const divEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const catContainerEl = document.querySelector('.cat-info');
const errorEl = document.querySelector('.error');

fetchBreeds()
  .then(cats => {
    const markup = createMarkUp(cats);
    selectEl.insertAdjacentHTML('beforeend', markup);
    hideLoader();
    hideError();
  })
  .catch(error => {
    console.log('Error:', error);
    hideLoader();
    showError();
  });

selectEl.addEventListener('change', onChange);

function onChange(e) {
  e.preventDefault();
  breedId = selectEl.value;
  hideCatContainer();
  showLoader();

  fetchCatByBreed(breedId)
    .then(data => {
      const imgUrl = data[0].url;
      const catName = data[0].breeds[0].name;
      const catDescription = data[0].breeds[0].description;
      const catTemperament = data[0].breeds[0].temperament;

      const catInfo = {
        imgUrl: imgUrl,
        catName: catName,
        catDescription: catDescription,
        catTemperament: catTemperament,
      };

      const catMarkUp = createCatMarkUp(catInfo);
      divEl.innerHTML = catMarkUp;

      hideLoader();
      showCatContainer();
      hideError();
    })
    .catch(error => {
      console.log('Error:', error);

      hideLoader();
      showCatContainer();
      showError();
    });
}

function createMarkUp(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function createCatMarkUp({ imgUrl, catName, catDescription, catTemperament }) {
  return `<img class='cat-image' src="${imgUrl}" alt="${catName}" width='500' />
      <div class="cat-details">
  <h1 class='cat-name'>${catName}</h1>
      <p class='cat-description'>${catDescription}</p>
      <p class="cat-temperament"><b>Temperament:</b> ${catTemperament}</p> </div>`;
}

function showLoader() {
  loaderEl.classList.add('show');
}
function hideLoader() {
  loaderEl.classList.remove('show');
}

function hideCatContainer() {
  catContainerEl.classList.add('hidden');
}
function showCatContainer() {
  catContainerEl.classList.remove('hidden');
}

function hideError() {
  errorEl.classList.add('hidden');
}
function showError() {
  errorEl.classList.remove('hidden');
}
