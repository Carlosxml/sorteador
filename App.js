const form = document.querySelector('.article__form')
const resultContainer = document.querySelector('.article__result')
const raffledItem = document.querySelector('span.raffled-item')

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputsValues = [
    event.target.input1.value,
    event.target.input2.value,
    event.target.input3.value,
    event.target.input4.value,
    event.target.input5.value
  ]

  const randomIndex = Math.round(Math.random() * 4)
  raffledItem.textContent = inputsValues[randomIndex]

  if (Array.from(resultContainer.classList).includes('d-none')) {
    resultContainer.classList.remove('d-none')
  }
})

form.addEventListener('input', () => {
  if (!Array.from(resultContainer.classList).includes('d-none')) {
    resultContainer.classList.add('d-none')
  }
})
