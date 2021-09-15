/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import '../css/swiper-bundle.min.css';
import '../css/style.css';
import '../css/style.scss';
import ARRAY_ONE from './keyboard/data';
import Keyboard from './keyboard/script';
import { mySwiper } from './swiper';
import './swiper-bundle.min';

let name = 'matrix';
let page = 1;

function getMoviesRating(rating) {
  const url = `https://www.omdbapi.com/?i=${rating}&apikey=6748b7d8`;
  return fetch(url)
    .then(res => res.json())
    .then((data) =>  data.imdbRating);
}

async function createCard({Title, Year, Poster, imdbID}, rating) {
  const card = 
  `<div class="swiper-slide">
  <div class="slide">
  <a class="card__title" href="https://www.imdb.com/title/${imdbID}/videogallery/" target="_blank" alt="${Title}">${Title}</a>
  <div class="card__image" style="background-image: url(${Poster === 'N/A' ? '../img/no_poster.jpg' : Poster});"><div>
  <p class="card__year">${Year}</p>
  <div class="rating">
      <object class="rating__star" data="./img/star.svg" type="image/svg+xml"></object>
      <p>${rating}</p>
  </div></div>
  </div>`;
  mySwiper.appendSlide(card);
  mySwiper.update();
}

function getMoviesPageData(name, page, loadHead) {
  const InfoResults2 = document.querySelector('.info');
  const totalResult = document.querySelector('.total__result');
  const url = `https://www.omdbapi.com/?s=${name}&page=${page}&apikey=6748b7d8`;
  
  return fetch(url)
    .then(res => res.json())
    .then((data) => {
      if (data.Search === undefined) {
        InfoResults2.textContent = `No results, please try it again`;
        loadHead.classList.remove('load-none');
        return 1;
      }
      data.Search.forEach(async (elem) => {
        const rating = await getMoviesRating(elem.imdbID);
        createCard(elem, rating, loadHead, name, page);
      });
      totalResult.textContent = `Total results: ${data.totalResults === undefined ? '0' : data.totalResults}`
    });
}


function getTranslateWord(page) {
  const InfoResults3 = document.querySelector('.info');
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200510T191527Z.8229ec0082417a85.dc01ee0653b9a809c8156ede454fa1f6178ca395&text=${page}&lang=ru-en`;
  
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      InfoResults3.textContent = `results for word - ${data.text[0]}`;
      return data.text[0]});
}

export async function smthFunc(page, swiperWrapper, InfoResults, searchInput,  loadHead) {
    loadHead = document.querySelector('.load');
    swiperWrapper = document.querySelector('.swiper-wrapper');
    InfoResults = document.querySelector('.info');
    searchInput = document.querySelector('.search__input');

    loadHead.classList.add('load-none');
    name = searchInput.value.trim();

  if (name === '') {
    loadHead.classList.remove('load-none');
    return InfoResults.textContent = `Please, enter movie name`;
  }

  name = await getTranslateWord(name);
  if (searchInput.value.trim() === name) {
    InfoResults.textContent = '';
  }
  const resWorkRequest = await getMoviesPageData(name, page, loadHead);
  if (resWorkRequest === 1) {
    return;
  }

  swiperWrapper.innerHTML = '';
  loadHead.classList.remove('load-none');
}

async function getFirstRequest(loadHead) {
  loadHead.classList.add('load-none');
  await getMoviesPageData(name, page, loadHead);
  loadHead.classList.remove('load-none');
}

async function start() {  
  const searchInput = document.querySelector('.search__input');
  const searchButton = document.querySelector('.search__button');
  const loadHead = document.querySelector('.load');
  const searchClear = document.querySelector('.search__clear');
  const searchKeyboard = document.querySelector('.search__keyboard');
  const keyboardWrap = document.querySelector('.keyboard__wrap');

  searchInput.focus();

  await getFirstRequest(loadHead);
  
  const keyboard = new Keyboard(ARRAY_ONE);
  await keyboard.addBasicMarkUp();

  mySwiper.slideTo(0, 1000, false);
  
  searchButton.addEventListener('click', async () => {await smthFunc(page, name)});
  searchClear.addEventListener('click', () => {searchInput.value = '';});
  searchInput.addEventListener('keyup', async (event) => {
    event.preventDefault();
    if (event.code === 'Enter') {
      await smthFunc(page, name);
    }
  });

  searchKeyboard.addEventListener('click', () => {
    keyboardWrap.classList.toggle('keyboard__wrap-none');
    searchKeyboard.classList.toggle('search__keyboard-red');
  });


  mySwiper.on('reachEnd', async () => {
    page++;
  loadHead.classList.add('load-none');
  await getMoviesPageData(name, page, loadHead);
  loadHead.classList.remove('load-none');
  });
}





window.addEventListener('load', start);
