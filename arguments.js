function getFullName(firstName, lastName){
    let fullName = "";
    for(let i = 0; i<arguments.length; i++){
        const namePart = arguments[i];
        fullName += namePart;
    }
    return fullName;
}

console.log(getFullName('Monjurul ','Haque ','Rajun '));