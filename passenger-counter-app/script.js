// document.getElementById("count").innerText = 100
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save(){
    let saves = count + " - "
    saveEl.textContent += saves
    countEl.textContent = 0
    count = 0
}