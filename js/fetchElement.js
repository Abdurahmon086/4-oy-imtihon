import { getArr } from "./main.js"


fetch('https://www.googleapis.com/books/v1/volumes?q=a')
    .then(res => res.json())
    .then(data => {
        getArr(data.items)
    })


export function searchFech(value) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
        .then(res => res.json())
        .then(data => {
            getArr(data.items)
        })
}

