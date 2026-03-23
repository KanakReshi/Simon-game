let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let acceptingInput = false;
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

function playSequence() {
  acceptingInput = false;

  gameSeq.forEach(function (color, index) {
    let button = document.querySelector(`#${color}`);
    setTimeout(function () {
      flash(button);
    }, 600 * index);
  });

  setTimeout(function () {
    acceptingInput = true;
  }, 600 * gameSeq.length);
}

function levelUp() {
  userSeq = [];
  acceptingInput = false;
  level++;
  h2.innerText = `Level ${level}`;

  let random_index = Math.floor(Math.random() * btns.length);
  let random_color = btns[random_index];
  gameSeq.push(random_color);
  console.log(gameSeq);
  playSequence();
}

function checkSequence() {
  console.log("Current Level : ", level);
  let index = userSeq.length - 1;
  if (userSeq[index] == gameSeq[index]) {
    if (userSeq.length == gameSeq.length) setTimeout(levelUp, 1000);
  } else {
    h2.innerText = `Game OVERR, PRESS ANY KEY TO START AGAIN\n YOUR SCORE WAS : ${level} `;
    redScreen();
    restart();
  }
}

function btnPress() {
  if (!started || !acceptingInput) return;

  let btn = this;
  userFlash(btn);
  let userColor = btn.id;
  console.log(userColor);
  userSeq.push(userColor);
  checkSequence();
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function restart() {
  started = false;
  level = 0;
  acceptingInput = false;
  userSeq = [];
  gameSeq = [];
}

function redScreen() {
  body.classList.add("redScreen");
  setTimeout(function () {
    body.classList.remove("redScreen");
  }, 200);
}
