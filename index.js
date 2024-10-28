

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
        reult = 'tie'
    }else if(computerMuve === 'paper') {
        reult = 'you loss'
    }else if(computerMuve === 'scissors'){
        reult = 'you win'
    }
    console.log(computerMuve);
    console.log(reult);
}