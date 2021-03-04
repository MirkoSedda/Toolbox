const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')
const icons = document.querySelector('.icons')
const heart = document.getElementById('heart')

let timesLiked = 0
let counter = 1

loveMe.addEventListener('dblclick', e => {
  createHeart(e)
})

const createHeart = e => {
  const bigHeart = document.createElement('i')
  bigHeart.classList.add('fas')
  bigHeart.classList.add('fa-heart')

  bigHeart.style.top = '45%'
  bigHeart.style.left = '50%'

  loveMe.appendChild(bigHeart)

  heart.classList.remove('fa-heart-o')
  heart.classList.add('fa-heart')

  if (counter % 2 !== 0) {
    counter++
  } else {
    counter = counter
  }

  times.innerHTML = ++timesLiked

  setTimeout(() => bigHeart.remove(), 1000)
}

heart.addEventListener('click', e => {
  counter++

  if (counter % 2 == 0) {
    heart.classList.remove('fa-heart-o')
    heart.classList.add('fa-heart')
    times.innerHTML = ++timesLiked
  } else {
    heart.classList.remove('fa-heart')
    heart.classList.add('fa-heart-o')
    times.innerHTML = --timesLiked
  }
})
