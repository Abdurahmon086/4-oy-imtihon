import { renderCardUi } from "./main.js"


let elPageList = document.querySelector('.store__page')
let elPage = document.querySelector('.page__number')


export function pagination(arr) {
    let pageArr = []
    let sum = Math.ceil(arr.length / 6)
    for (let i = 1; i <= sum; i++) {
        pageArr.push(i)
    }

    pageArr.forEach((item) => {
        let elList = document.createElement('li');
        elList.setAttribute('class', 'page__item');
        elList.innerHTML = `
        <p class="page__text">${item}</p>
        `
        elPage.appendChild(elList)
    })

    elPageList.addEventListener('click', e => {
        if (e.target.matches(".page__text")) {
            let pageNumber = e.target.textContent
            let x = pageNumber * 6
            let y = (pageNumber - 1) * 6
            let ui = arr.slice(y, x)
            renderCardUi(ui)
        }

        if (e.target.matches(".page__slide")) {
            let pageNumber = e.target.textContent
            if (pageNumber == "<") {
                console.log("ok");
            }
        }
    })

}