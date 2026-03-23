let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let body = document.querySelector("body");

let h2 = document.querySelector("h2");
// console.dir(h2);

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

function flash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 200);
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let random_index = Math.floor(Math.random() * 3);
  let random_color = btns[random_index];
  let random_button = document.querySelector(`.${random_color}`);
  gameSeq.push(random_color);
  console.log(gameSeq);
  flash(random_button);
}

function checkSequence() {
  console.log("Current Level : ", level);
  let index = level - 1;
  if (userSeq[index] == gameSeq[index]) {
    if (userSeq.length == gameSeq.length) setTimeout(levelUp, 1000);
  } else {
    if (userSeq.length == gameSeq.length) {
      h2.innerText = `Game OVERR, PRESS ANY KEY TO START AGAIN\n YOUR SCORE WAS : ${level} `;
      redScreen();
      restart();
    }
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.id;
  console.log(userColor);
  userSeq.push(userColor);
  checkSequence(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function restart() {
  started = false;
  level = 0;
  userSeq = [];
  gameSeq = [];
}

function redScreen() {
  body.classList.add("redScreen");
  setTimeout(function () {
    body.classList.remove("redScreen");
  }, 200);
}
