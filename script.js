const panels = document.querySelectorAll('.cards')

panels.forEach(cards => {
  cards.addEventListener('click', () => {
    removeActiveClasses()
    cards.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(cards => {
    cards.classList.remove('active')
  })
}
