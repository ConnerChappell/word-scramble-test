///////////////////////// selectors
const body = document.querySelector('body')
const puzzleNumber = document.querySelector('#puzzle-number')
// modals
const welcomeModal = document.querySelector('#welcome-modal')
const closeModalBtn = document.querySelector('#close-modal-btn')
const successModal = document.querySelector('#success-modal')
const nextWordBtn = document.querySelector('#next-word-btn')
const tryAgainModal = document.querySelector('#try-again-modal')
const tryAgainBtn = document.querySelector('#try-again-btn')
const scoreModal = document.querySelector('#score-modal')
const finalScore = document.querySelector('#final-score')
const refreshBtn = document.querySelector('#refresh-btn')
// word guess row
const wordGuessRow = document.querySelector('.word-guess-row')
const backspaceBtn = document.querySelector('#backspace-btn')
// scrambled letters container
const scrambledLettersContainer = document.querySelector('.scrambled-letters-container')
const scrambledLettersRow = document.querySelector('.scrambled-letters-row')
const submitGuessBtn = document.querySelector('#submit-guess-btn')
const skipWordBtn = document.querySelector('#skip-word-btn')
// letter tiles and buttons
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

let words = ['hiker', 'blaze', 'plant', 'guide', 'trail']
// array destructuring to assign variables for each word
let [word1, word2, word3, word4, word5] = words

let wordGuessArr = []
let score = 0

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
let scrambledWord2 = scrambleWord(word2)
let scrambledWord2Arr = scrambledWord2.split('')
let scrambledWord3 = scrambleWord(word3)
let scrambledWord3Arr = scrambledWord3.split('')
let scrambledWord4 = scrambleWord(word4)
let scrambledWord4Arr = scrambledWord4.split('')
let scrambledWord5 = scrambleWord(word5)
let scrambledWord5Arr = scrambledWord5.split('')

// function that resets guessed word array
const resetWordGuessArr = () => {
    letterTile5.textContent = ''
    letterTile5.classList.remove('letter-btn')
    letterTile5.classList.add('letter-tile')
    letterTile4.textContent = ''
    letterTile4.classList.remove('letter-btn')
    letterTile4.classList.add('letter-tile')
    letterTile3.textContent = ''
    letterTile3.classList.remove('letter-btn')
    letterTile3.classList.add('letter-tile')
    letterTile2.textContent = ''
    letterTile2.classList.remove('letter-btn')
    letterTile2.classList.add('letter-tile')
    letterTile1.textContent = ''
    letterTile1.classList.remove('letter-btn')
    letterTile1.classList.add('letter-tile')
}

// function that resets clicked letter btn to letter btn
const resetLetterBtns = () => {
    letterBtn1.classList.remove('clicked-letter-btn')
    letterBtn1.classList.add('letter-btn')
    letterBtn2.classList.remove('clicked-letter-btn')
    letterBtn2.classList.add('letter-btn')
    letterBtn3.classList.remove('clicked-letter-btn')
    letterBtn3.classList.add('letter-btn')
    letterBtn4.classList.remove('clicked-letter-btn')
    letterBtn4.classList.add('letter-btn')
    letterBtn5.classList.remove('clicked-letter-btn')
    letterBtn5.classList.add('letter-btn')
}

// functions for displaying scrambled words
const displayScrambledWord1 = () => {
    letterBtn1.textContent = scrambledWord1Arr[0]
    letterBtn2.textContent = scrambledWord1Arr[1]
    letterBtn3.textContent = scrambledWord1Arr[2]
    letterBtn4.textContent = scrambledWord1Arr[3]
    letterBtn5.textContent = scrambledWord1Arr[4]
}
displayScrambledWord1()
const displayScrambledWord2 = () => {
    puzzleNumber.textContent = 'Puzzle 2'
    wordGuessArr.splice(0, wordGuessArr.length)
    resetWordGuessArr()
    resetLetterBtns()
    letterBtn1.textContent = scrambledWord2Arr[0]
    letterBtn2.textContent = scrambledWord2Arr[1]
    letterBtn3.textContent = scrambledWord2Arr[2]
    letterBtn4.textContent = scrambledWord2Arr[3]
    letterBtn5.textContent = scrambledWord2Arr[4]
}
const displayScrambledWord3 = () => {
    puzzleNumber.textContent = 'Puzzle 3'
    wordGuessArr.splice(0, wordGuessArr.length)
    resetWordGuessArr()
    resetLetterBtns()
    letterBtn1.textContent = scrambledWord3Arr[0]
    letterBtn2.textContent = scrambledWord3Arr[1]
    letterBtn3.textContent = scrambledWord3Arr[2]
    letterBtn4.textContent = scrambledWord3Arr[3]
    letterBtn5.textContent = scrambledWord3Arr[4]
}
const displayScrambledWord4 = () => {
    puzzleNumber.textContent = 'Puzzle 4'
    wordGuessArr.splice(0, wordGuessArr.length)
    resetWordGuessArr()
    resetLetterBtns()
    letterBtn1.textContent = scrambledWord4Arr[0]
    letterBtn2.textContent = scrambledWord4Arr[1]
    letterBtn3.textContent = scrambledWord4Arr[2]
    letterBtn4.textContent = scrambledWord4Arr[3]
    letterBtn5.textContent = scrambledWord4Arr[4]
}
const displayScrambledWord5 = () => {
    puzzleNumber.textContent = 'Puzzle 5'
    wordGuessArr.splice(0, wordGuessArr.length)
    resetWordGuessArr()
    resetLetterBtns()
    letterBtn1.textContent = scrambledWord5Arr[0]
    letterBtn2.textContent = scrambledWord5Arr[1]
    letterBtn3.textContent = scrambledWord5Arr[2]
    letterBtn4.textContent = scrambledWord5Arr[3]
    letterBtn5.textContent = scrambledWord5Arr[4]
}

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
// functions that check where letters are in scrambled word array 2
const checkWord2Letter5 = () => {
    if (wordGuessArr[4] === scrambledWord2Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord2Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord2Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord2Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord2Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord2Letter4 = () => {
    if (wordGuessArr[3] === scrambledWord2Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord2Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord2Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord2Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord2Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord2Letter3 = () => {
    if (wordGuessArr[2] === scrambledWord2Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord2Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord2Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord2Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord2Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord2Letter2 = () => {
    if (wordGuessArr[1] === scrambledWord2Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord2Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord2Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord2Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord2Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord2Letter1 = () => {
    if (wordGuessArr[0] === scrambledWord2Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord2Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord2Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord2Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord2Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
// functions that check where letters are in scrambled word array 3
const checkWord3Letter5 = () => {
    if (wordGuessArr[4] === scrambledWord3Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord3Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord3Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord3Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord3Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord3Letter4 = () => {
    if (wordGuessArr[3] === scrambledWord3Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord3Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord3Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord3Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord3Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord3Letter3 = () => {
    if (wordGuessArr[2] === scrambledWord3Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord3Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord3Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord3Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord3Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord3Letter2 = () => {
    if (wordGuessArr[1] === scrambledWord3Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord3Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord3Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord3Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord3Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord3Letter1 = () => {
    if (wordGuessArr[0] === scrambledWord3Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord3Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord3Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord3Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord3Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
// functions that check where letters are in scrambled word array 4
const checkWord4Letter5 = () => {
    if (wordGuessArr[4] === scrambledWord4Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord4Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord4Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord4Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord4Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord4Letter4 = () => {
    if (wordGuessArr[3] === scrambledWord4Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord4Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord4Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord4Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord4Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord4Letter3 = () => {
    if (wordGuessArr[2] === scrambledWord4Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord4Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord4Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord4Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord4Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord4Letter2 = () => {
    if (wordGuessArr[1] === scrambledWord4Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord4Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord4Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord4Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord4Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord4Letter1 = () => {
    if (wordGuessArr[0] === scrambledWord4Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord4Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord4Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord4Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord4Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
// functions that check where letters are in scrambled word array 5
const checkWord5Letter5 = () => {
    if (wordGuessArr[4] === scrambledWord5Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord5Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord5Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord5Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[4] === scrambledWord5Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord5Letter4 = () => {
    if (wordGuessArr[3] === scrambledWord5Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord5Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord5Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord5Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[3] === scrambledWord5Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord5Letter3 = () => {
    if (wordGuessArr[2] === scrambledWord5Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord5Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord5Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord5Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[2] === scrambledWord5Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord5Letter2 = () => {
    if (wordGuessArr[1] === scrambledWord5Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord5Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord5Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord5Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[1] === scrambledWord5Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}
const checkWord5Letter1 = () => {
    if (wordGuessArr[0] === scrambledWord5Arr[4]) {
        letterBtn5.classList.remove('clicked-letter-btn')
        letterBtn5.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord5Arr[3]) {
        letterBtn4.classList.remove('clicked-letter-btn')
        letterBtn4.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord5Arr[2]) {
        letterBtn3.classList.remove('clicked-letter-btn')
        letterBtn3.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord5Arr[1]) {
        letterBtn2.classList.remove('clicked-letter-btn')
        letterBtn2.classList.add('letter-btn')
    } else if (wordGuessArr[0] === scrambledWord5Arr[0]) {
        letterBtn1.classList.remove('clicked-letter-btn')
        letterBtn1.classList.add('letter-btn')
    }
}

// function that checks word 1 for backspace btn
const backspaceBtnWord1Check = () => {
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
}
// function that checks word 2 for backspace btn
const backspaceBtnWord2Check = () => {
    if (wordGuessArr.length === 5) {
        checkWord2Letter5()
        letterTile5.textContent = ''
        letterTile5.classList.remove('letter-btn')
        letterTile5.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 4) {
        checkWord2Letter4()
        letterTile4.textContent = ''
        letterTile4.classList.remove('letter-btn')
        letterTile4.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 3) {
        checkWord2Letter3()
        letterTile3.textContent = ''
        letterTile3.classList.remove('letter-btn')
        letterTile3.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 2) {
        checkWord2Letter2()
        letterTile2.textContent = ''
        letterTile2.classList.remove('letter-btn')
        letterTile2.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 1) {
        checkWord2Letter1()
        letterTile1.textContent = ''
        letterTile1.classList.remove('letter-btn')
        letterTile1.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    }
}
// function that checks word 3 for backspace btn
const backspaceBtnWord3Check = () => {
    if (wordGuessArr.length === 5) {
        checkWord3Letter5()
        letterTile5.textContent = ''
        letterTile5.classList.remove('letter-btn')
        letterTile5.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 4) {
        checkWord3Letter4()
        letterTile4.textContent = ''
        letterTile4.classList.remove('letter-btn')
        letterTile4.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 3) {
        checkWord3Letter3()
        letterTile3.textContent = ''
        letterTile3.classList.remove('letter-btn')
        letterTile3.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 2) {
        checkWord3Letter2()
        letterTile2.textContent = ''
        letterTile2.classList.remove('letter-btn')
        letterTile2.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 1) {
        checkWord3Letter1()
        letterTile1.textContent = ''
        letterTile1.classList.remove('letter-btn')
        letterTile1.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    }
}
// function that checks word 4 for backspace btn
const backspaceBtnWord4Check = () => {
    if (wordGuessArr.length === 5) {
        checkWord4Letter5()
        letterTile5.textContent = ''
        letterTile5.classList.remove('letter-btn')
        letterTile5.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 4) {
        checkWord4Letter4()
        letterTile4.textContent = ''
        letterTile4.classList.remove('letter-btn')
        letterTile4.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 3) {
        checkWord4Letter3()
        letterTile3.textContent = ''
        letterTile3.classList.remove('letter-btn')
        letterTile3.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 2) {
        checkWord4Letter2()
        letterTile2.textContent = ''
        letterTile2.classList.remove('letter-btn')
        letterTile2.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 1) {
        checkWord4Letter1()
        letterTile1.textContent = ''
        letterTile1.classList.remove('letter-btn')
        letterTile1.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    }
}
// function that checks word 5 for backspace btn
const backspaceBtnWord5Check = () => {
    if (wordGuessArr.length === 5) {
        checkWord5Letter5()
        letterTile5.textContent = ''
        letterTile5.classList.remove('letter-btn')
        letterTile5.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 4) {
        checkWord5Letter4()
        letterTile4.textContent = ''
        letterTile4.classList.remove('letter-btn')
        letterTile4.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 3) {
        checkWord5Letter3()
        letterTile3.textContent = ''
        letterTile3.classList.remove('letter-btn')
        letterTile3.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 2) {
        checkWord5Letter2()
        letterTile2.textContent = ''
        letterTile2.classList.remove('letter-btn')
        letterTile2.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    } else if (wordGuessArr.length === 1) {
        checkWord5Letter1()
        letterTile1.textContent = ''
        letterTile1.classList.remove('letter-btn')
        letterTile1.classList.add('letter-tile')
        wordGuessArr.pop()
        console.log(wordGuessArr)
    }
}

///////////////////////// event listeners

// click event listeners for scrambled letter btns
scrambledLettersRow.addEventListener('click', (event) => {
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
    if (letterBtn1.textContent === scrambledWord1Arr[0] && letterBtn2.textContent === scrambledWord1Arr[1]) {
        backspaceBtnWord1Check()
    } else if (letterBtn1.textContent === scrambledWord2Arr[0] && letterBtn2.textContent === scrambledWord2Arr[1]) {
        backspaceBtnWord2Check()
    } else if (letterBtn1.textContent === scrambledWord3Arr[0] && letterBtn2.textContent === scrambledWord3Arr[1]) {
        backspaceBtnWord3Check()
    } else if (letterBtn1.textContent === scrambledWord4Arr[0] && letterBtn2.textContent === scrambledWord4Arr[1]) {
        backspaceBtnWord4Check()
    } else if (letterBtn1.textContent === scrambledWord5Arr[0] && letterBtn2.textContent === scrambledWord5Arr[1]) {
        backspaceBtnWord5Check()
    }
})

// click event listener for submitting guess
submitGuessBtn.addEventListener('click', () => {
    let guessedWord = wordGuessArr.join('')

    if (guessedWord === word1) {
        score++
        successModal.style.display = 'block'
        displayScrambledWord2()
    } else if (guessedWord === word2) {
        score++
        successModal.style.display = 'block'
        displayScrambledWord3()
    } else if (guessedWord === word3) {
        score++
        successModal.style.display = 'block'
        displayScrambledWord4()
    } else if (guessedWord === word4) {
        score++
        successModal.style.display = 'block'
        displayScrambledWord5()
    } else if (guessedWord === word5) {
        score++
        scoreModal.style.display = 'block'
        finalScore.textContent = `Final Score: ${score}/5`
    } else {
        tryAgainModal.style.display = 'block'
    }
})

// click event listener for skipping
skipWordBtn.addEventListener('click', () => {
    if (letterBtn1.textContent === scrambledWord1Arr[0] && letterBtn2.textContent === scrambledWord1Arr[1] && letterBtn3.textContent === scrambledWord1Arr[2] && letterBtn4.textContent === scrambledWord1Arr[3] && letterBtn5.textContent === scrambledWord1Arr[4]) {
        displayScrambledWord2()
    } else if (letterBtn1.textContent === scrambledWord2Arr[0] && letterBtn2.textContent === scrambledWord2Arr[1] && letterBtn3.textContent === scrambledWord2Arr[2] && letterBtn4.textContent === scrambledWord2Arr[3] && letterBtn5.textContent === scrambledWord2Arr[4]) {
        displayScrambledWord3()
    } else if (letterBtn1.textContent === scrambledWord3Arr[0] && letterBtn2.textContent === scrambledWord3Arr[1] && letterBtn3.textContent === scrambledWord3Arr[2] && letterBtn4.textContent === scrambledWord3Arr[3] && letterBtn5.textContent === scrambledWord3Arr[4]) {
        displayScrambledWord4()
    } else if (letterBtn1.textContent === scrambledWord4Arr[0] && letterBtn2.textContent === scrambledWord4Arr[1] && letterBtn3.textContent === scrambledWord4Arr[2] && letterBtn4.textContent === scrambledWord4Arr[3] && letterBtn5.textContent === scrambledWord4Arr[4]) {
        displayScrambledWord5()
    } else if (letterBtn1.textContent === scrambledWord5Arr[0] && letterBtn2.textContent === scrambledWord5Arr[1] && letterBtn3.textContent === scrambledWord5Arr[2] && letterBtn4.textContent === scrambledWord5Arr[3] && letterBtn5.textContent === scrambledWord5Arr[4]) {
        scoreModal.style.display = 'block'
        finalScore.textContent = `Final Score: ${score}/5`
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

// click event listener that refreshes page and game
refreshBtn.addEventListener('click', () => {
    window.location.reload(true)
})