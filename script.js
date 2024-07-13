'use strict';
let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20
let highScore = 0;

const displayMessage = function (message){
    document.querySelector ('.message').textContent = message;
}





document.querySelector('.check').addEventListener('click', function(){
    const guess = Number((document.querySelector('.guess').value))
    // Not a number //
    if(!guess){
        displayMessage('🚫Not a number');
    }
    // Win //
    else if (guess === secretNumber){
        if(score > 1){
        displayMessage ("🏆You win!");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber

        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }}
    // Too high or Too Low//
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? "📈Too high" : "📉Too low");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage ("🤣You lost the game")
            document.querySelector('.score').textContent = 0;
        }
    }
   
})


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;


    displayMessage ('Start guessing...') 
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = '#222';

  })









   // else if(guess > secretNumber){
    //     if(score > 1){
    //     document.querySelector('.message').textContent = "Too high, dolbaeb😐"
    //     score--
    //     document.querySelector('.score').textContent = score;
    // }
    //     else{
    //         document.querySelector('.message').textContent = "You fucking dubil. You lose🤪"
    //         document.querySelector('.score').textContent = 0
    //     }
    // }
    // // Too low //
    // else if(guess < secretNumber){
    //     if(score > 1){
    //     document.querySelector('.message').textContent = "Too low, dolbaeb😐"
    //     score--
    //     document.querySelector('.score').textContent = score;}
    //     else{
    //         document.querySelector('.message').textContent = "You fucking dubil. You lose🤪"
    //         document.querySelector('.score').textContent = 0
    //     }
    // }