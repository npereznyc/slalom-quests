function replaceTags(newTags: string[]) {
    const tagsDiv: HTMLElement | null = document.getElementById('tags')

    while (tagsDiv?.hasChildNodes()) {
        const firstTag: ChildNode | null = tagsDiv.firstChild
    
        tagsDiv.removeChild(firstTag!)
    }
    
    newTags.forEach(tag => {
        const tagSpan = document.createElement('span')

        tagSpan.innerText = tag
        tagsDiv?.appendChild(tagSpan)
    })
}

export default replaceTags
