"use strict";
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const dieceEl1 = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dieceEl1.classList.add("hidden");

//rolling diece functionality

btnRoll.addEventListener("click", function () {
  // genarate random diece roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  

  // score storing
  dieceEl1.classList.remove("hidden");
  dieceEl1.src=`dice-${dice}.png`;
  //switching when get 1
});
