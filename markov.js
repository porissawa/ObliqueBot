const fs = require('fs')

let txt = []
const order = 4
let ngrams = {}
let beginnings = []

//populate txt array with lines from cards.txt
let array = fs.readFileSync('cards.txt').toString().split("\n")

for(j = 0; j < array.length; j++) {
    let txt = array[j]
    for (i = 0; i <= txt.length - order; i++) {
        let gram = txt.substring(i, i + order)
        if (i === 0) {
            beginnings.push(gram)
        }
        if(!ngrams[gram]) {
            ngrams[gram] = []
        }
        ngrams[gram].push(txt.charAt(i + order))
    }
}

markovIt = () => {
    let beginningi = Math.floor(Math.random() * Math.floor(beginnings.length))
    let currentGram = beginnings[beginningi]
    let result = currentGram
    for(i = 0; i < 26; i++) {
        let possibilities = ngrams[currentGram]
        if(!possibilities) {
            break
        }
        let nexti = Math.floor(Math.random() * Math.floor(possibilities.length))
        let next = possibilities[nexti]
        result += next
        let len = result.length
        currentGram = result.substring(len - order, len)
    }
    console.log(result)
}

markovIt()