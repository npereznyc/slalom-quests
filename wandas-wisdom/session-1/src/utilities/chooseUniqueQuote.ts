import selectRandomQuote from './selectRandomQuote'
import checkIfIdentical from './checkIfIdentical'
import Quote from '../types'

function chooseUniqueQuote(oldText: string, allQuotes: Quote[]) {
    const newQuote: Quote = selectRandomQuote(allQuotes)
    const newText: string = newQuote.text
    const isIdentical = checkIfIdentical(oldText, newText)

    if (!isIdentical) {
        return newQuote
    } else {
        chooseUniqueQuote(oldText, allQuotes)
    }
}

export default chooseUniqueQuote
