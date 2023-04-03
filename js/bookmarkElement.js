import { elCard } from "./main.js";


let elBookmark = document.querySelector('.bookmark__inner')

function renderBookmarkUi(arr) {
    elBookmark.innerHTML = ''
    arr.forEach((item, i) => {
        const elCard = document.createElement('li');
        elCard.setAttribute('class', "bookmark__card card")
        elCard.innerHTML = `
        <div class="card__right">
         <h3 class="card__title">${item.title}</h3>
        <p class="card__text">${item.author}</p>
        </div>
        <div class="card__left">
        <a href="${item.link}"  target="_blank" ><img src="./images/bookmark.svg" alt="bookmark icon"></a>
        <img src="./images/delete.svg" alt="delete icon" class="card__delete" data-id='${i}'>
        </div>
        `
        elBookmark.append(elCard)
    })
}

let bookmarkArray = []

export function bookmark(arr) {
    elCard.addEventListener('click', e => {
        if (e.target.matches('.card__btn-book')) {
            let id = e.target.dataset.id;
            let btnValue = arr.filter(item => item.id === id)[0];
            if (!bookmarkArray.includes(btnValue)) {
                bookmarkArray.push(btnValue)
            }
            renderBookmarkUi(bookmarkArray)
        }
    })

}

elBookmark.addEventListener('click', e => {
    if (e.target.matches('.card__delete')) {
        let id = e.target.dataset.id;
        bookmarkArray.splice(id, 1)
        renderBookmarkUi(bookmarkArray)
        console.log(bookmarkArray);
    }
})
