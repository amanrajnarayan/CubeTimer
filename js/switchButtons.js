// let button = document.querySelector("button");
// let timerBox = document.querySelector(".timer");
// let scrambleElement = document.getElementById("scramble");
// let scramble = "";

// function start() {
//   countingTime();
//   button.innerHTML = "<ion-icon class='button-icon' name='hand'></ion-icon>Stop";
//   button.style.opacity = "1";

//   scrambleElement.style.opacity = "0";
// }

// function pause() {
//   clearInterval(chronometer);
//   button.innerHTML = "<ion-icon class='button-icon' name='checkmark-circle'></ion-icon>Reset";
//   button.style.opacity = "1";
// }

// function reset() {
//   convertToMilliseconds();
//   insertTimeOnArray();
//   insertTimeOnTheTable();

//   timerBox.innerHTML = "<span class='minute'>00</span>:<span class='second'>00</span>:<span class='millisecond'>00</span>";

//   minute = second = millisecond = 0;

//   // Regenerate the scramble and update the scramble element
//   scramble = generateScramble();
//   scrambleElement.textContent = "Scramble: " + scramble;
//   scrambleElement.style.opacity = "1";

//   button.innerHTML = "<ion-icon class='button-icon' name='time'></ion-icon>Start";
// }

// button.addEventListener("click", () => {
//   if (button.textContent == "Start") start();
//   else if (button.textContent == "Stop") pause();
//   else if (button.textContent == "Reset") reset();
// });

// document.addEventListener("keyup", (e) => {
//   if (e.keyCode == 32) {
//     if (button.textContent == "Start") start();
//     else if (button.textContent == "Stop") pause();
//     else if (button.textContent == "Reset") reset();
//   }
// });

// reset(); // Generate and display the initial scramble
// scrambleElement.style.opacity = "1"; // Set opacity to 1 on page load
let button = document.querySelector("button");
let timerBox = document.querySelector(".timer");
let scrambleElement = document.getElementById("scramble");
let scramble = "";

function start() {
  countingTime();
  button.innerHTML = "<ion-icon class='button-icon' name='hand'></ion-icon>Stop";
  button.style.opacity = "1";

  scrambleElement.style.opacity = "0";
}

function pause() {
  clearInterval(chronometer);
  button.innerHTML = "<ion-icon class='button-icon' name='checkmark-circle'></ion-icon>Reset";
  button.style.opacity = "1";
}

function reset() {
  convertToMilliseconds();
  insertTimeOnArray();
  insertTimeOnTheTable();

  timerBox.innerHTML = "<span class='minute'>00</span>:<span class='second'>00</span>:<span class='millisecond'>00</span>";

  minute = second = millisecond = 0;

  // Regenerate the scramble and update the scramble element
  scramble = generateScramble();
  scrambleElement.textContent = "Scramble: " + scramble;
  scrambleElement.style.opacity = "1";

  button.innerHTML = "<ion-icon class='button-icon' name='time'></ion-icon>Start";
}

button.addEventListener("click", () => {
  if (button.textContent == "Start") start();
  else if (button.textContent == "Stop") pause();
  else if (button.textContent == "Reset") reset();
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 32) {
    if (button.textContent == "Start") start();
    else if (button.textContent == "Stop") pause();
    else if (button.textContent == "Reset") reset();
  }
});

scramble = generateScramble(); // Generate initial scramble
scrambleElement.textContent = "Scramble: " + scramble; // Update scramble element
scrambleElement.style.opacity = "1"; // Set opacity to 1 on page load
