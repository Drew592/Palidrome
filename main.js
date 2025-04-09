function backwardsWord(word) {
    return word.split('').reverse().join('')   
}

let yourWord = prompt ("Type in your chosen word")
let backwardWord = backwardsWord(yourWord)
if (yourWord == backwardWord){
    console.log (yourWord + " True ")
}
else if (yourWord!= backwardWord){
    console.log(yourWord + " False ")
}