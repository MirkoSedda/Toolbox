const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const storedTheme = localStorage.getItem('prefers-color-scheme')

let spinReset = false

setHTMLTransition(false)
setTimeout(() => setHTMLTransition(true), 0)

if (storedTheme) {
  if (storedTheme === 'dark') {
    document.documentElement.classList.add('dark')
    setToggleButtonText()
  }
  if (storedTheme === 'light') {
    document.documentElement.classList.remove('dark')
    setToggleButtonText()
  }
} else if (
  window.matchMedia('(prefers-color-scheme)').media !== 'not all' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  document.documentElement.classList.add('dark')
  setToggleButtonText()
}

function setHTMLTransition(bool) {
  document.documentElement.style.transition = bool
    ? 'all 0.5s ease-in'
    : 'none 0s ease 0s'
}

toggle.addEventListener('click', () => {
  localStorage.setItem(
    'prefers-color-scheme',
    document.documentElement.classList.contains('dark') ? 'light' : 'dark'
  )
  document.documentElement.classList.toggle('dark')
  setToggleButtonText()
})

setTime(true)
setInterval(() => setTime(), 1000)

function setTime(init) {
  const time = new Date()

  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours()
  const clockHours = hours % 12

  const day = time.getDate()
  const month = time.getMonth()
  const dayOfTheWeek = time.getDay()

  if (seconds === 59 && minutes === 59 && clockHours === 11) {
    spinReset = true
  }

  if (init) {
    setNeedleTransition(false)
    setNeedles(clockHours, minutes, seconds)
    setTimeout(() => {
      setNeedleTransition(true)
    }, 100)
  } else if (spinReset && seconds === 0 && minutes === 0 && clockHours === 0) {
    spinReset = false
    setNeedles(12, 0, 0)
    setTimeout(() => {
      setNeedleTransition(false)
      setNeedles(0, 0, 0)
      setTimeout(() => {
        setNeedleTransition(true)
      }, 100)
    }, 500)
  } else {
    setNeedles(clockHours, minutes, seconds)
  }

  timeElement.innerText = `${hours
    .toString()
    .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  dateElement.innerHTML = `${days[dayOfTheWeek]}, ${months[month]} <span class="circle">${day}</span>`
}

function setNeedles(hours, minutes, seconds) {
  setNeedleDegree(
    hourElement,
    hours * 60 * 60 + minutes * 60 + seconds,
    12 * 60 * 60,
    0
  )
  setNeedleDegree(minuteElement, minutes * 60 + seconds, 60 * 60, hours)
  setNeedleDegree(secondElement, seconds, 60, hours * 60 + minutes)
}

function setNeedleDegree(needle, value, maxValue, spin) {
  const degree = spin * 360 + (value * 360) / maxValue

  needle.style.transform = `translate(-50%, -100%) rotate(${degree}deg)`
}

function setNeedleTransition(bool) {
  hourElement.style.transition = bool ? 'all 0.5s ease-in' : 'none 0s ease 0s'
  minuteElement.style.transition = bool ? 'all 0.5s ease-in' : 'none 0s ease 0s'
  secondElement.style.transition = bool ? 'all 0.5s ease-in' : 'none 0s ease 0s'
}
