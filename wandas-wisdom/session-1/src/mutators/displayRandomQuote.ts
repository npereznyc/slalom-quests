import quotes from '../data/quotes'
import chooseUniqueQuote from '../utilities/chooseUniqueQuote'
import makeAllCaps from '../utilities/makeAllCaps'
import sortTags from '../utilities/sortTags'
import replaceTags from './replaceTags'
import Quote from '../types'

function displayRandomQuote() {
    const textArticle: HTMLElement | null = document.getElementById('text')
    const authorP: HTMLElement | null = document.getElementById('author')
    const oldQuote: string = textArticle?.innerText || ''
    const newQuote: Quote | undefined = chooseUniqueQuote(oldQuote, quotes)

    if(newQuote){
        const quoteText: string = newQuote.text
        const quoteAuthor: string = makeAllCaps(newQuote.author)
        const quoteTags: string[] = sortTags(newQuote.tags)
    
        textArticle!.innerText = quoteText
        authorP!.innerText = quoteAuthor
        replaceTags(quoteTags)
    } else {
        console.error("Failed to generate a unique quote.")
    }
    
}

export default displayRandomQuote
