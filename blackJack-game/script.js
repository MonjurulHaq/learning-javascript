let firstCard = 10
let secondCard = 9
let sum = firstCard + secondCard
gotBlackJack = false
isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame(){
    sumEl.textContent = "Sum: "+ sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 20){
        message = "You have got BlackJack"
    }else{
        message = "You are out of the game"
        isAlive = false
    }
}