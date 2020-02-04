let age = 20 ;
if (age < 0 ){
    console.log ('you weren\'t even born')
}else if (age < 18 ){
    console.log ('you\'re still young')
}else {
console.log ('just the right age');
}

let number = Math.floor(Math.random()*10)+1
let num = prompt('I thought of a random number between 1 and 10, guess it')
if (number == num) {
    alert ('you are sooooo lucky!!!')
} else {
    alert (`${num} is wrong the right number is ${number}`)
}