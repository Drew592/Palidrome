function backwardsWord(word) {
    return word.split('').reverse().join('')   
}

let yourWord = prompt ("Type in your chosen word")
let backwardWord = backwardsWord(yourWord)
if (yourWord == backwardWord){
    console.log (yourWord + " Your word is a plaindrome")
}
else if (yourWord!= backwardWord){
    console.log(yourWord + " Your word is not a plindrome ya failed")
}