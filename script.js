// Mood Dashboard Interactions

const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greetingText = document.getElementById("greetingText");
const moodBox = document.getElementById("moodBox");
const growBtn = document.getElementById("growBtn");
const shrinkBtn = document.getElementById("shrinkBtn");
const toggleModeBtn = document.getElementById("toggleModeBtn");
const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");
const body = document.body;

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    greetingText.innerText = "Hello, friend!";
    greetingText.style.color = "#555";
  } else {
    greetingText.innerText = `Hello, ${name}!`;
    greetingText.style.color = "#333"; // keep it dark while typing
    greetingText.style.fontWeight = "bold";
  }
});

// Greet user with style
greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    greetingText.innerText = "Please enter your name 😊";
  } else {
    greetingText.innerText = `Hello, ${name}!`;
    greetingText.style.color = "#4caf50";
    greetingText.style.fontSize = "1.5rem";
    greetingText.style.fontWeight = "bold";
  }
});

// Grow or shrink mood box
growBtn.addEventListener("click", () => {
  let size = parseInt(window.getComputedStyle(moodBox).width);
  moodBox.style.width = size + 20 + "px";
  moodBox.style.height = size + 20 + "px";
});

shrinkBtn.addEventListener("click", () => {
  let size = parseInt(window.getComputedStyle(moodBox).width);
  if (size > 50) {
    moodBox.style.width = size - 20 + "px";
    moodBox.style.height = size - 20 + "px";
  }
});

// Toggle between day and night mode
toggleModeBtn.addEventListener("click", () => {
  body.classList.toggle("night-mode");
});

// Show/hide secret motivational message
secretBtn.addEventListener("click", () => {
  secretMessage.classList.toggle("hidden");
});

// Difference between innerHTML and innerText
/*
.innerHTML parses HTML tags inside a string and renders them.
.innerText shows only the visible text (no HTML tags are interpreted).
*/
