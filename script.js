"use strict";
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const dieceEl1 = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dieceEl1.classList.add("hidden");

const score = [0, 0];
let activePlayer = 0;
let currentScore = 0;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
//rolling diece functionality

btnRoll.addEventListener("click", function () {
  // genarate random diece roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);

  // score storing

  dieceEl1.classList.remove("hidden");
  dieceEl1.src = `dice-${dice}.png`;

  //switching when get 1

  if (dice !== 1) {
    // add to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    // current0El.textContent = currentScore; //change upcoming session
  } else {
    // switch to next player
    switchPlayer();
  }
});
btnHold.addEventListener("click", function () {
  // console.log("hold button");

  //adding cuurent score of active player

  score[activePlayer] += currentScore;
  // score[1] = score[1]+currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];

  /// check score to minimum hunderd

  // switch player
  switchPlayer();
});
