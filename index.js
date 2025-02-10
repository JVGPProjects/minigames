// Generate random numbers for both dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // Left dice (Player 1)
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // Right dice (Player 2)

// Select the <img> elements for both dice
let diceImage1 = document.querySelector(".img1"); // Left dice
let diceImage2 = document.querySelector(".img2"); // Right dice

// Set the src attributes to the corresponding dice images
diceImage1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
diceImage2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Select the <h1> element
let heading = document.querySelector("h1");

// Change the text content of the <h1> based on the dice results
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 Wins! 🚩";
} else {
  heading.innerHTML = "Draw!";
}

// Add click event to the roll button
document.querySelector(".roll-btn").addEventListener("click", function() {
  // Play dice roll sound
  let rollSound = document.getElementById("dice-roll-sound");
  rollSound.play();

  // Generate new random numbers for both dice
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Update dice images
  diceImage1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  diceImage2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Update the heading based on the new result
  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins! 🚩";
  } else {
    heading.innerHTML = "Draw!";
  }
});

// Get references to the new game buttons
const truthOrDareButton = document.getElementById('truth-or-dare');
const truthOrDareAdultButton = document.getElementById('truth-or-dare-adult');
const wouldYouRatherButton = document.getElementById('would-you-rather');
const cardsAgainstHumanityButton = document.getElementById('cards-against-humanity');
const partyQAButton = document.getElementById('party-qa');

// Example sets for adult Truth or Dare (feel free to add more daring content)
const adultTruths = [
  "What’s the craziest thing you’ve done while drunk?",
  "Have you ever had a one-night stand? Describe it.",
  "What's your most embarrassing sex story?",
  "What's the most inappropriate thing you've said to someone?",
  "Have you ever sent a sext? What did it say?"
];

const adultDares = [
  "Send a naughty text to someone.",
  "Do your best striptease for 30 seconds.",
  "Call your crush and tell them you like them.",
  "Take a shot of hot sauce.",
  "Let the person to your left draw on your face with a marker."
];

// Event listener for Truth or Dare (Adult Edition)
truthOrDareAdultButton.addEventListener('click', () => {
  const isTruth = Math.random() < 0.5;  // Randomly choose between Truth or Dare

  if (isTruth) {
    // Pick a random truth
    const randomTruth = adultTruths[Math.floor(Math.random() * adultTruths.length)];
    alert("Truth: " + randomTruth);
  } else {
    // Pick a random dare
    const randomDare = adultDares[Math.floor(Math.random() * adultDares.length)];
    alert("Dare: " + randomDare);
  }
});

// Event listener for Truth or Dare button
truthOrDareButton.addEventListener('click', () => {
  alert('You clicked Truth or Dare! This can be its own game!');
  // You can add regular Truth or Dare logic here
});

// Event listener for Would You Rather button
wouldYouRatherButton.addEventListener('click', () => {
  alert('You clicked Would You Rather! Get ready for tough choices!');
  // Add logic for Would You Rather game here
});

// Event listener for Cards Against Humanity button (Adult Edition)
cardsAgainstHumanityButton.addEventListener('click', () => {
  alert('You clicked Cards Against Humanity (Adult Edition)! Get ready for some fun!');
  // You can link to a more complex game setup for Cards Against Humanity or display cards here
});

// Event listener for Party Q&A button
partyQAButton.addEventListener('click', () => {
  alert('You clicked Party Q&A! Time to ask some interesting questions!');
  // Add Party Q&A game logic or display questions here
});

