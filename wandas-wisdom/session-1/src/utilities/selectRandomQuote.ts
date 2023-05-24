import generateRandomNumber from './generateRandomNumber'
import Quote from '../types'

function selectRandomQuote(possibleQuotes: Quote[]): Quote {
    const quotesLength: number = possibleQuotes.length
    const randomNumber: number = generateRandomNumber(quotesLength)
    const randomQuote: Quote = possibleQuotes[randomNumber]

    return randomQuote
}

export default selectRandomQuote
