let result_id = document.querySelector('#result_id');
// main game ression --> 0-1 between and 0-1/3-1/2-1 game


// Rock-button work here
function RockButton(){
    const rendomNumber = Math.random();
    let computerMuve = '';

    if(rendomNumber >=0 && rendomNumber <1/3){
        computerMuve = "rock";

    }else if(rendomNumber >= 1/3 && rendomNumber < 1/2 ) {
        computerMuve = "paper"

    }else if(rendomNumber >= 1/2 && rendomNumber < 1 ) {
        computerMuve = "scissors"
    }
    
    // Game result here

    let reult = '';
    if(computerMuve === 'rock'){
        reult = 'Tie'
        result_id.textContent = 'Tie🤘'
    }else if(computerMuve === 'paper') {
        reult = ' You loss'
        result_id.textContent = 'You Loss😔'
    }else if(computerMuve === 'scissors'){
        reult = ' You win'
        result_id.textContent = 'You Win🏆'
    }
    // Computer result alert

    alert(`You Pick rock. Computer Pick ${computerMuve}. ${reult}`);
}




// Paper-button work here
function PaperButton(){
    const rendomNumber = Math.random();
    let computerMuve = '';

    if(rendomNumber >=0 && rendomNumber <1/3){
        computerMuve = "rock";

    }else if(rendomNumber >= 1/3 && rendomNumber < 1/2 ) {
        computerMuve = "paper"

    }else if(rendomNumber >= 1/2 && rendomNumber < 1 ) {
        computerMuve = "scissors"
    }
    
    // Game result here

    let reult = '';
    if(computerMuve === 'rock'){
        reult = ' You win';
        result_id.textContent = 'You Win🏆'
    }else if(computerMuve === 'paper') {
        reult = 'Tie';
        result_id.textContent = 'Tie🤘'
    }else if(computerMuve === 'scissors'){
        reult = ' You loss';
        result_id.textContent = 'You Loss😔'
    }
    
    // Computer result alert
    alert(`You Pick paper. Computer Pick ${computerMuve}. ${reult}`);
}




// Scissors-button work here
function ScissorsButton(){
    const rendomNumber = Math.random();
    let computerMuve = '';

    if(rendomNumber >=0 && rendomNumber <1/3){
        computerMuve = "rock";

    }else if(rendomNumber >= 1/3 && rendomNumber < 1/2 ) {
        computerMuve = "paper"

    }else if(rendomNumber >= 1/2 && rendomNumber < 1 ) {
        computerMuve = "scissors"
    }
    
    // Game result here

    let reult = '';
    if(computerMuve === 'rock'){
        reult = ' You loss';
        result_id.textContent = 'You Loss😔'
    }else if(computerMuve === 'paper') {
        reult = 'You win';
        result_id.textContent = 'You Win🏆'
    }else if(computerMuve === 'scissors'){
        reult = 'Tie';
        result_id.textContent = 'Tie🤘'
    }
    
    // Computer result alert
    alert(`You Pick scissors. Computer Pick ${computerMuve}. ${reult}`);
}




// Reset Button here
function ResetButton(){
    document.querySelector('#All_Result').style.display = 'none';
}