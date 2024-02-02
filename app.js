// Grabbing all of my elements

// Creating a placeholder array for card div's to be stored
let placeholders = []
// Grabbing all of the card div's
let emptyCard = document.querySelectorAll('.card');
// Cycling through the div's and pushing them into the empty array
emptyCard.forEach(function(card){
    placeholders.push(card);
})

// Setting states and declaring empty global variables
let cardNumbers = [];
let cardSum = 0;
let sumDisplay = document.getElementById('sum-display');
let message = "Press start to play game";
let messageDisplay = document.getElementById('message-display');
let errorMessage = "";
let errorDisplay = document.getElementById('error-display');
let isGameStarted = false;
let hasLost = false;
let hasWon = false;


// Creating the function that starts when start button is pressed
// Will create the first and second cards
// Will add the cards together
// Will push cards to the array
function startGame(){
    if(!isGameStarted){
        let firstNumber = getRandomNumber();
        let secondNumber = getRandomNumber();
        cardSum = firstNumber + secondNumber;
        cardNumbers = [firstNumber, secondNumber];
        isGameStarted = true;
        
        renderGame();
    }
    else{
        errorDisplay.textContent = "Game has already started..."
    }
}

// This function renders the numbers in the cards and renders the sum.
// Calculates if the game is won, lost or waiting for another card
function renderGame(){
    for(let i = 0; i < placeholders.length; i++){
        placeholders[i].textContent = cardNumbers[i];
        if(placeholders[i].textContent != ""){
            placeholders[i].style.background = "white";
            placeholders[i].style.color = "black";
        }
    }
    sumDisplay.textContent = "Sum: " + cardSum;
    messageDisplay.textContent = message;

    if(cardSum < 21){
        message = "Would you like to choose another card";  
    }
    else if(cardSum === 21){
        message = "You have BlackJack!";
        hasWon = true;
    }
    else if(cardSum > 21){
        message = "You have lost the game";
        hasLost = true;
    }
    messageDisplay.textContent = message;
}

// If the game has started and isn't lost and isn't won, draw a card
// else display error and don't let draw
function newCard(){
    if(isGameStarted){
        if(!hasLost){
                if(!hasWon){
                let card = getRandomNumber();
                cardNumbers.push(card);
                cardSum += card;
                renderGame();
                }
                else{
                    errorMessage = "You've already won!"
                }
        }
        else{
            errorMessage = "You've already lost..."
        }
    }
    else{
        errorMessage = "You must start the game first..."
    }
    errorDisplay.textContent = errorMessage;
}

// Function to create a random number and return when called
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

function resetGame(){
    cardNumbers = [];
    cardSum = 0;
    sumDisplay.textContent = "Sum: " + cardSum;
    message = "Press start to play game";
    messageDisplay.textContent = message;
    errorMessage = "";
    errorDisplay.textContent = errorMessage;
    isGameStarted = false;
    hasLost = false;
    hasWon = false;

    // Remove cards from the display
    for(let i = 0; i < placeholders.length; i++){
        placeholders[i].textContent = "";
        placeholders[i].style.background = "";
        placeholders[i].style.color = "";
    }
}

