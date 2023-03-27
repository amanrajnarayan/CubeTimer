const folder = document.querySelector(".folder");
const back = document.querySelector(".back");
const box = document.querySelector(".box");

folder.addEventListener("click", () => {
    box.style.animation = "slideIn .3s forwards";
    box.style.display = "inherit";
});

back.addEventListener("click", () => {
    box.style.animation = "slideOut .3s forwards";
    box.style.display = "none";
});

function generateScramble() {
    const moves = ["R", "L", "U", "D", "F", "B"]; // List of all possible moves
    const modifiers = ["", "'", "2"]; // List of possible move modifiers (none, counterclockwise, 180 degrees)
  
    let scramble = ""; // Initialize empty string for the scramble
  
    // Generate 20 random moves for the scramble
    for (let i = 0; i < 20; i++) {
      // Select a random move and modifier
      const move = moves[Math.floor(Math.random() * moves.length)];
      const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
  
      // Add the move and modifier to the scramble string
      scramble += move + modifier + " ";
    }
  
    return scramble.trim(); // Remove the trailing space and return the scramble
  }
  