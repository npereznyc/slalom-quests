import buttonText from '../data/buttonText'
import displayRandomQuote from '../mutators/displayRandomQuote'

function createButton() {
    const button: HTMLButtonElement = document.createElement('button')
    button.innerText = buttonText
    button.addEventListener('click', displayRandomQuote)

    return button
}

export default createButton
