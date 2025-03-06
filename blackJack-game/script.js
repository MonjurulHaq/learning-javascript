let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
gotBlackJack = false
isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    return Math.floor(Math.random()*13)
}
function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: "+ sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "You have got BlackJack"
        gotBlackJack = true
    }else{
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    let card = 2
    sum += card
    renderGame()
}