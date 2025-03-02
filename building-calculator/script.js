let num1 = 9
let num2 = 3

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
let subtractEl = document.getElementById("sub-el")
let divideEl = document.getElementById("div-el")
let multiplyEl = document.getElementById("multi-el")
function add(){
    let result = num1 + num2
    sumEl.textContent ="Addition : "+ result
}

function subtract(){
    let result = num1 - num2
    subtractEl.textContent ="Subtraction : "+ result
}

function divide(){
    let result = num1 / num2
    divideEl.textContent ="Division : "+ result
}

function multiply(){
    let result = num1 * num2
    multiplyEl.textContent ="Multiplication : "+ result
}