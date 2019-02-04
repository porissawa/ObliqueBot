const fs = require('fs')

let txt = []
let counts = {}
let keys = []

//populate txt array with lines from cards.txt
let array = fs.readFileSync('cards.txt').toString().split("\n")
for(i in array) {
    txt.push(array[i])
}

//count words
let allwords = txt.join("\n")
let tokens = allwords.split(/\W+/)
for(i = 0; i < tokens.length; i++){
    let word = tokens[i].toLowerCase()
    if(counts[word] === undefined){
        counts[word] = 1
        keys.push(word)
    } else {
        counts[word]++
    } 
}

//sort by most common
function compare(a, b) {
    let countA = counts[a]
    let countB = counts[b]
    return countB - countA
}

let dictCount = keys.sort(compare)
console.log(tokens)
