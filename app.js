// Grabbing all of my elements

// Creating a placeholder array for card div's to be stored
let placeholders = []
// Grabbing all of the card div's
let emptyCard = document.querySelectorAll('.card');
// Cycling through the div's and pushing them into the empty array
emptyCard.forEach(function(card){
    placeholders.push(card);
})

let cardNumbers = [];
let cardSum = 0;
let sumDisplay = document.getElementById('sum-display');
let message = "";
let messageDisplay = document.getElementById('message-display');

function startGame(){
    let firstNumber = getRandomNumber();
    let secondNumber = getRandomNumber();
    cardSum = firstNumber + secondNumber;
    cardNumbers = [firstNumber, secondNumber];
    renderGame();
}

function renderGame(){
    for(let i = 0; i < placeholders.length; i++){
        placeholders[i].textContent = cardNumbers[i];
        if(placeholders[i].textContent != ""){
            placeholders[i].style.background = "white";
            placeholders[i].style.color = "black";
        }
    }
    sumDisplay.textContent = "Sum: " + cardSum;
}

function newCard(){
    let card = getRandomNumber();
    cardNumbers.push(card);
    cardSum += card;
    renderGame();
}

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 13 ) + 1;
    if(randomNumber > 10){
        return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }
}

startGame();

