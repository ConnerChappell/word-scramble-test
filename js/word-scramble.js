///////////////////////// selectors
const body = document.querySelector('body')
const modal = document.querySelector('#welcome-modal')
const closeModalBtn = document.querySelector('#close-modal-btn')

let words = ['hiker', 'moose', 'berry', 'picnic', 'trail']
// array destructuring to assign variables for each word
let [word1, word2, word3, word4, word5] = words

///////////////////////// functions

// function that scrambles word
const scrambleWord = (word) => {
    // converts word/string into array
    let wordArr = word.split('')

    // sorts the array and returns a random value each time it is called
    wordArr.sort(function() {
        return 0.5 - Math.random()
    })

    // converts array back into a string and returns scrambled word
    word = wordArr.join('')
    return word
}
let scrambledWord1 = scrambleWord(word1)
let scrambledWord2 = scrambleWord(word2)
let scrambledWord3 = scrambleWord(word3)
let scrambledWord4 = scrambleWord(word4)
let scrambledWord5 = scrambleWord(word5)
console.log(scrambledWord1)
console.log(scrambledWord2)
console.log(scrambledWord3)
console.log(scrambledWord4)
console.log(scrambledWord5)


///////////////////////// event listeners

// click event listener that closes welcome modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('fade-out')
    
    setTimeout(function() {
        modal.style.display = 'none'
        modal.classList.remove('fade-out')
    }, 300)
})