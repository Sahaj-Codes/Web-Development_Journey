let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");

let score1 = document.querySelector("#score--0");
let score2 = document.querySelector("#score--1");

let current1 = document.querySelector("#current--0");
let current2 = document.querySelector("#current--1");

let diceEl = document.querySelector(".dice");
let btnNEW = document.querySelector(".btn--new");
let btnROLL = document.querySelector(".btn--roll");
let btnHOLD = document.querySelector(".btn--hold");

let mainScore1, mainScore2, currentScore, activePlayer, playing;

let init = () =>{

    current1.textContent = 0;
    current2.textContent = 0;
    currentScore= 0;
    mainScore1 = 0;
    mainScore2 = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    activePlayer = 0;
    playing = true;

    player1.classList.add("player--active");
    player2.classList.remove("player--active");
    player1.classList.remove("player--winner");
    player2.classList.remove("player--winner");

    diceEl.classList.add("hidden");
};

init();
let changePlayer = () =>{
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
};
let rollDice = () => {
    if(playing == true){
        let randomNumber = Math.trunc(Math.random() * 6) + 1;
        console.log(randomNumber);

        diceEl.src = `dice-${randomNumber}.png`;
        diceEl.classList.remove("hidden");

        if (randomNumber !== 1){

            currentScore = currentScore + randomNumber;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
            
        } else {
            changePlayer();
        }
    }
};

let holDice = () => {
    if(playing == true){
        if(activePlayer === 0){
            mainScore1 = mainScore1 + currentScore;
            score1.textContent = mainScore1;
            if(mainScore1 >=20){
                playing = false;
                diceEl.classList.add("hidden");
                player1.classList.add("player--winner");
            } else { 
                changePlayer();
            }
        } else {
            mainScore2 = mainScore2 + currentScore;
            score2.textContent = mainScore2;
            if(mainScore2 >= 20){
                playing = false;
                diceEl.classList.add("hidden");
                player2.classList.add("player--winner");
            } else {
                changePlayer();
            }
        }
    }
};

btnNEW.addEventListener("click", init);
btnROLL.addEventListener("click", rollDice);
btnHOLD.addEventListener("click", holDice);