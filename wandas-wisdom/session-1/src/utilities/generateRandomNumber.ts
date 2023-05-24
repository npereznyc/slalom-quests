function generateRandomNumber(upperLimit: number) {
    const randomNumber = Math.floor(Math.random() * upperLimit)

    return randomNumber
}

export default generateRandomNumber
