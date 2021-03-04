const nav = document.querySelector('.nav')
window.addEventListener('scroll', stickyNav)

function stickyNav() {
  if (window.scrollY > nav.offsetHeight + 400) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}
