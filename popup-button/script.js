const button = document.getElementById('button')
const popUp = document.getElementById('popUp')

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
  const popup = document.createElement('div')
  popup.classList.add('message')
  popup.classList.add(type ? type : getRandomType())

  popup.innerText = message ? message : getRandomMessage()

  popUp.appendChild(popup)

  setTimeout(() => {
    popup.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
