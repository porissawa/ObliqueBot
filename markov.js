const fs = require('fs')

let txt = []
const order = 6
let ngrams = {}

//populate txt array with lines from cards.txt
let array = fs.readFileSync('cards.txt').toString().split("\n")
for(i in array) {
    txt += " " + array[i]
}

for (i = 0; i <= txt.length - order; i++) {
    var gram = txt.substring(i, i + order)
    if(!ngrams[gram]) {
        ngrams[gram] = []
    }
    ngrams[gram].push(txt.charAt(i + order))
}

// console.log(ngrams)

markovIt = () => {
    let currentGram = txt.substring(0, order)
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