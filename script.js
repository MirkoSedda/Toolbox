const images = document.querySelectorAll('.cards')

images.forEach(cards => {
  cards.addEventListener('click', () => {
    removeActiveClasses()
    cards.classList.add('active')
  })
})

function removeActiveClasses() {
  images.forEach(cards => {
    cards.classList.remove('active')
  })
}
