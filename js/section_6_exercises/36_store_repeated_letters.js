function repeatedLetters(phrase){
    let letters = {}
    phrase = phrase.replaceAll(" ", "").toLowerCase()
    for(i=0;i<phrase.length;i++){
        letter = phrase[i]
        letterQt = letters[letter] ?? 0
        letters[letter] = letterQt + 1
    }
    return letters
} 

let phrase = "banana azul"

console.log(repeatedLetters(phrase))