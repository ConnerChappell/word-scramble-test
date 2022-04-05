///////////////////////// selectors
const body = document.querySelector('body')
const modal = document.querySelector('#welcome-modal')
const closeModalBtn = document.querySelector('#close-modal-btn')
const scrambledLettersRow = document.querySelector('.scrambled-letters-row')
let letterBtn1 = document.querySelector('#letter-btn1')
let letterBtn2 = document.querySelector('#letter-btn2')
let letterBtn3 = document.querySelector('#letter-btn3')
let letterBtn4 = document.querySelector('#letter-btn4')
let letterBtn5 = document.querySelector('#letter-btn5')

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

    // converts array back into a string
    let scrambledWord = wordArr.join('')

    // if scrambled word = original word then it scrambles again and returns new scrambled word, else returns scrambled word
    if (scrambledWord === word) {
        let newScrambledWord = scrambleWord(scrambledWord)
        return newScrambledWord
    } else {
        return scrambledWord
    }
}
let scrambledWord1 = scrambleWord(word1)
let scrambledWord1Arr = scrambledWord1.split('')
// let scrambledWord2 = scrambleWord(word2)
// let scrambledWord3 = scrambleWord(word3)
// let scrambledWord4 = scrambleWord(word4)
// let scrambledWord5 = scrambleWord(word5)
console.log(scrambledWord1)
console.log(scrambledWord1Arr)

// functions for displaying scrambled words
const displayScrambledWord1 = () => {
    letterBtn1.textContent = scrambledWord1Arr[0]
    letterBtn2.textContent = scrambledWord1Arr[1]
    letterBtn3.textContent = scrambledWord1Arr[2]
    letterBtn4.textContent = scrambledWord1Arr[3]
    letterBtn5.textContent = scrambledWord1Arr[4]
}




displayScrambledWord1()

///////////////////////// event listeners

// click event listener that closes welcome modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('fade-out')
    
    setTimeout(function() {
        modal.style.display = 'none'
        modal.classList.remove('fade-out')
    }, 300)
})