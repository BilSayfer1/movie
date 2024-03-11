import { movies } from "./db.js";

let modal_window = document.querySelector('#modal')
let zakrit = document.querySelector('.close_button')
let pil = document.querySelector('.promo__interactive-list')
let frame = document.querySelector('.promo__bg iframe')
let modal_title = document.querySelector('.modal_title')
let modal_genre = document.querySelector('.modal_genre')
let modal_plot = document.querySelector('.modal_plot')
let modal_img = document.querySelector('#modal img')


function replay(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let idx = arr.indexOf(item)
        let li = document.createElement('li')

        li.classList.add('li_dec')
        li.innerHTML = `${idx + 1}. ${item.Title}`
        li.onclick = () => {
            frame.src = item.Trailer + "?autoplay=1"
        }

        li.ondblclick = () => {
            modal_window.style.display = 'flex'
            modal_img.src = item.Poster
            modal_genre.innerHTML = item.Genre
            modal_plot.innerHTML = item.Plot
    
            zakrit.onclick = () => {
                modal_window.style.display = 'none'
            }
        }
        place.append(li)
    }
}

replay(movies, pil)