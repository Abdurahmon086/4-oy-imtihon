import { searchFech } from '../js/fetchElement.js'
import { bookmark } from './bookmarkElement.js';
import { moreInfo } from './infoElement.js';
import { pagination } from './paginationElement.js';


let KEY = 'AIzaSyCWw7P-Dwlm4DSkbgEhax8IiQh6TSHnUI0'
export let elCard = document.querySelector('.store__inner');
let elSearch = document.querySelector('.form__search');
const token = localStorage.getItem('token');


const logoutBtn = document.querySelector('.head__btn');
if (!token) {
    window.location.href = './login.html';
}

if (token) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        logoutBtn.textContent = 'login';
        window.location.href = './login.html';
    });
}


export function renderCardUi(arr) {
    let array = [...arr].splice(0, 6)
    elCard.innerHTML = '';
    array.forEach(item => {
        let card = document.createElement('li');
        card.setAttribute('class', 'store__card card')
        card.innerHTML = `
            <div class="card__top">
            <img src="${item.img}" alt="" class='card__image'>
            </div>
            <h4 class="card__title">${item.title}</h4>
            <p class="card__text">${item.author}</p>
            <p class="card__text">${item.year}</p>
            <div class="card__bottom">
            <button class="card__btn card__btn-book" data-id='${item.id}'>Bookmark</button>
            <button class="card__btn card__btn-info" data-id='${item.id}'>More Info</button>
            <a href='${item.link}' target="_blank" class="card__btn card__btn-read" data-id='${item.id}'>Read </a>
            </div>
            `
        elCard.append(card)

    });

}

export function getArr(arr) {
    const cardArray = arr.map(item => {
        return {
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors,
            publisher: item.volumeInfo.publisher,
            description: item.volumeInfo.description == undefined ? 'no description' : item.volumeInfo.description,
            pageCount: item.volumeInfo.pageCount,
            categories: item.volumeInfo.categories == undefined ? null : item.volumeInfo.categories,
            img: item.volumeInfo.imageLinks.thumbnail,
            link: item.volumeInfo.previewLink,
            year: item.volumeInfo.publishedDate
        }
    })

    renderCardUi(cardArray);
    moreInfo(cardArray);
    bookmark(cardArray);
    pagination(cardArray);
}

elSearch.addEventListener('keyup', e => {
    let inputValue = e.target.value;
    searchFech(inputValue);
})


let elHead = document.querySelector('.show__wrapper')
elHead.addEventListener('click', e => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=${KEY}`)
        .then(res => res.json())
        .then(data => getArr(data.items))
})