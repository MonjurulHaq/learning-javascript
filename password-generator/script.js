const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () =>{
    const password = resultEl.innerText;
    if(!password){
        return;
    }
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value 
    const hasUpper = uppercaseEl.checked
    const hasLower = lowercaseEl.checked
    const hasNumber = numberEl.checked
    const hasSymbol = symbolEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)

})

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = ''
    const typescount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    if (typescount === 0){
        return ''
    }

    for(let i = 0; i<length; i+=typescount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;


    
}


function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}