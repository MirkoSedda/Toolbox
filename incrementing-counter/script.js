const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const counterInnerText = +counter.innerText

    const increment = target / 300

    if (counterInnerText < target) {
      counter.innerText = `${Math.ceil(counterInnerText + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})
