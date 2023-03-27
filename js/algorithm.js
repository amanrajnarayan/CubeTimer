// In the showTable.js file, after generating a new scramble:
const scramble = generateScramble();
const scrambleElement = document.getElementById("scramble");
scrambleElement.textContent = "Scramble: " + scramble;