import { elCard } from "./main.js";

let elInfo = document.querySelector('.more-info');

function renderInfoUi(arr) {
    elInfo.innerHTML = ''
    arr.forEach(item => {
        const elCard = document.createElement('div');
        elCard.setAttribute('class', "more-info__wrapper")
        elCard.innerHTML = `
        <div class="more-info__top">
        <h3 class="more-info__title">${item.title}</h3>
        <img src="./images/x.svg" alt="x icon" class='more-info__del'>
        </div>
         <div class="more-info__card card">
        <img src="${item.img}" alt="${item.title}" class="card__img">
        <p class="card__text">${item.description.slice(0, 700)}</p>
        <div class="card__inner">
            <p class="card__auth">Author : <span class="card__info">${item.author}</span></p>
            <p class="card__auth">Published : <span class="card__info">${item.year}</span></p>
            <p class="card__auth">Categories: <span class="card__info">${item.categories}</span></p>
            <p class="card__auth">Pages Count: <span class="card__info">${item.pageCount}</span></p>
        </div>
        </div>
        <div class="more-info__bottom">
        <a href='${item.link}' target="_blank" class="more-info__btn ">Readme</a>
         </div>        
        
        `
        elInfo.append(elCard)
    })
}

export function moreInfo(arr) {
    elCard.addEventListener('click', e => {
        if (e.target.matches('.card__btn-info')) {
            let id = e.target.dataset.id;
            const btnValue = arr.filter(item => item.id == id)
            elInfo.classList.toggle('none')
            renderInfoUi(btnValue)
        }
    })

    elInfo.addEventListener('click', e => {
        if (e.target.matches('.more-info__del')) {
            elInfo.classList.add('none')
        }
    })
}