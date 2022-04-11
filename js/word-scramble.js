///////////////////////// selectors
const body = document.querySelector('body')
// modals
const welcomeModal = document.querySelector('#welcome-modal')
const closeModalBtn = document.querySelector('#close-modal-btn')
const successModal = document.querySelector('#success-modal')
const nextWordBtn = document.querySelector('#next-word-btn')
const tryAgainModal = document.querySelector('#try-again-modal')
const tryAgainBtn = document.querySelector('#try-again-btn')
// word guess row
const wordGuessRow = document.querySelector('.word-guess-row')
const backspaceBtn = document.querySelector('#backspace-btn')
// scrambled letters container
const scrambledLettersContainer = document.querySelector('.scrambled-letters-container')
const scrambledLettersRow = document.querySelector('.scrambled-letters-row')
const submitGuessBtn = document.querySelector('#submit-guess-btn')
const skipWordBtn = document.querySelector('#skip-word-btn')

let letterTile1 = document.querySelector('#letter-tile1')
let letterTile2 = document.querySelector('#letter-tile2')
let letterTile3 = document.querySelector('#letter-tile3')
let letterTile4 = document.querySelector('#letter-tile4')
let letterTile5 = document.querySelector('#letter-tile5')
let letterBtn1 = document.querySelector('#letter-btn1')
let letterBtn2 = document.querySelector('#letter-btn2')
let letterBtn3 = document.querySelector('#letter-btn3')
let letterBtn4 = document.querySelector('#letter-btn4')
let letterBtn5 = document.querySelector('#letter-btn5')

let words = ['hiker', 'moose', 'berry', 'picnic', 'trail']
// array destructuring to assign variables for each word
let [word1, word2, word3, word4, word5] = words

let wordGuessArr = []

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

// functions that displays the guessed letters
const displayGuessedLetter1 = () => {
    letterTile1.textContent = wordGuessArr[0]
    letterTile1.classList.remove('letter-tile')
    letterTile1.classList.add('letter-btn')
}
const displayGuessedLetter2 = () => {
    letterTile2.textContent = wordGuessArr[1]
    letterTile2.classList.remove('letter-tile')
    letterTile2.classList.add('letter-btn')
}
const displayGuessedLetter3 = () => {
    letterTile3.textContent = wordGuessArr[2]
    letterTile3.classList.remove('letter-tile')
    letterTile3.classList.add('letter-btn')
}
const displayGuessedLetter4 = () => {
    letterTile4.textContent = wordGuessArr[3]
    letterTile4.classList.remove('letter-tile')
    letterTile4.classList.add('letter-btn')
}
const displayGuessedLetter5 = () => {
    letterTile5.textContent = wordGuessArr[4]
    letterTile5.classList.remove('letter-tile')
    letterTile5.classList.add('letter-btn')
}

// functions that check where letters are in scrambled word array 1
const checkWord1Letter5 = () => {
    if (wordGuessArr[4] === scrambledWord1Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord1Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord1Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord1Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord1Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord1Letter4 = () => {
    if (wordGuessArr[3] === scrambledWord1Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord1Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord1Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord1Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord1Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord1Letter3 = () => {
    if (wordGuessArr[2] === scrambledWord1Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord1Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord1Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord1Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord1Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord1Letter2 = () => {
    if (wordGuessArr[1] === scrambledWord1Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord1Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord1Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord1Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord1Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord1Letter1 = () => {
    if (wordGuessArr[0] === scrambledWord1Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord1Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord1Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord1Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord1Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}

///////////////////////// event listeners

// click event listeners for scrambled letter btns
scrambledLettersContainer.addEventListener('click', (event) => {
    // adds letters to wordGuessArr
    if (event.target.id === 'letter-btn1') {
        wordGuessArr.push(letterBtn1.textContent)
        letterBtn1.classList.remove('letter-btn')
        letterBtn1.classList.add('clicked-letter-btn')
        console.log(wordGuessArr)
    } else if (event.target.id === 'letter-btn2') {
        wordGuessArr.push(letterBtn2.textContent)
        letterBtn2.classList.remove('letter-btn')
        letterBtn2.classList.add('clicked-letter-btn')
        console.log(wordGuessArr)
    } else if (event.target.id === 'letter-btn3') {
        wordGuessArr.push(letterBtn3.textContent)
        letterBtn3.classList.remove('letter-btn')
        letterBtn3.classList.add('clicked-letter-btn')
        console.log(wordGuessArr)
    } else if (event.target.id === 'letter-btn4') {
        wordGuessArr.push(letterBtn4.textContent)
        letterBtn4.classList.remove('letter-btn')
        letterBtn4.classList.add('clicked-letter-btn')
        console.log(wordGuessArr)
    } else if (event.target.id === 'letter-btn5') {
        wordGuessArr.push(letterBtn5.textContent)
        letterBtn5.classList.remove('letter-btn')
        letterBtn5.classList.add('clicked-letter-btn')
        console.log(wordGuessArr)
    }

    // displays guessed letters to wordGuessArr
    if (letterTile1.textContent === '') {
        displayGuessedLetter1()
    } else if (letterTile1.textContent !== '' && letterTile2.textContent === '') {
        displayGuessedLetter2()
    } else if (letterTile2.textContent !== '' && letterTile3.textContent === '') {
        displayGuessedLetter3()
    } else if (letterTile3.textContent !== '' && letterTile4.textContent === '') {
        displayGuessedLetter4()
    } else if (letterTile4.textContent !== '' && letterTile5.textContent === '') {
        displayGuessedLetter5()
    }
})

// click event listener for backspace btn
backspaceBtn.addEventListener('click', () => {
    // checks where letter is in scrambled array and displays it then deletes off of word guess array
    if (wordGuessArr.length === 5) {
        checkWord1Letter5()
        letterTile5.textContent = ''
        letterTile5.classList.remove('letter-btn')
        letterTile5.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 4) {
        checkWord1Letter4()
        letterTile4.textContent = ''
        letterTile4.classList.remove('letter-btn')
        letterTile4.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 3) {
        checkWord1Letter3()
        letterTile3.textContent = ''
        letterTile3.classList.remove('letter-btn')
        letterTile3.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 2) {
        checkWord1Letter2()
        letterTile2.textContent = ''
        letterTile2.classList.remove('letter-btn')
        letterTile2.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 1) {
        checkWord1Letter1()
        letterTile1.textContent = ''
        letterTile1.classList.remove('letter-btn')
        letterTile1.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } 
})

// click event listener for submitting guess
submitGuessBtn.addEventListener('click', () => {
    let guessedWord = wordGuessArr.join('')
    if (guessedWord === word1) {
        successModal.style.display = 'block'
    } else {
        tryAgainModal.style.display = 'block'
    }
})

// click event listeners that close modals
closeModalBtn.addEventListener('click', () => {
    welcomeModal.classList.add('fade-out')
    
    setTimeout(function() {
        welcomeModal.style.display = 'none'
        welcomeModal.classList.remove('fade-out')
    }, 300)
})
nextWordBtn.addEventListener('click', () => {
    successModal.classList.add('fade-out')

    setTimeout(function() {
        successModal.style.display = 'none'
        successModal.classList.remove('fade-out')
    }, 300)
})
tryAgainBtn.addEventListener('click', () => {
    tryAgainModal.classList.add('fade-out')

    setTimeout(function() {
        tryAgainModal.style.display = 'none'
        tryAgainModal.classList.remove('fade-out')
    }, 300)
})