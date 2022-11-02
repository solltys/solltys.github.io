"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (place, message) {
  document.querySelector(place).textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //whene there is no input
  if (!guess) {
    displayMessage(".message", "⛔️ No Number");
    //when guess is correct
  } else if (guess === secretNumber) {
    displayMessage(".message", "🎉 Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    displayMessage(".number", secretNumber);

    if (score > highScore) {
      highScore = score;
      displayMessage(".highscore", highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        ".message",
        guess > secretNumber ? "📈 Too high!" : "📈 Too low!"
      );
      score--;
      displayMessage(".score", score);
    } else {
      displayMessage(".message", "😭 You lost the game!!");
      displayMessage(".score", 0);
    }
  }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😭 You lost the game!!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(".message", "Start Guessing...");
  displayMessage(".score", score);
  displayMessage(".number", "?");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
