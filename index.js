
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("body")
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
     if (randomNumber > 10) {
         return 10
     } else if (randomNumber === 1) {
         return 1
     } else {
         return randomNumber
     }
          
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
}

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card"
    } else if (sum === 21) {
        message = "BlackJack"
        hasBlackJack = true
    } else {
        message = "Bye Bye"
        isAlive = false
    }
    messageEl.textContent = message  
}

function newCard(){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}


// let sentence = ["Hello", "my", "name", "is", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }