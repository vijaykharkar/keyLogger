const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const outputDiv = document.getElementById("output");
let isLogging = false;

function handlekeydown(event) {
  if (isLogging) {
    outputDiv.innerHTML = `<p>Key "${event.key}" is Pressed Down</p>`;
  }
}

function handlekeyup(event) {
  if (isLogging) {
    outputDiv.innerHTML = `<p>Key "${event.key}" is Pressed Up</p>`;
  }
}

startButton.addEventListener("click", () => {
  isLogging = true;
  startButton.disabled = true;
  stopButton.disabled = false;
  document.addEventListener("keydown", handlekeydown);
  document.addEventListener("keyup", handlekeyup);
});

stopButton.addEventListener("click", () => {
  isLogging = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  document.addEventListener("keydown", handlekeydown);
  document.addEventListener("keyup", handlekeyup);
  outputDiv.innerHTML = `<p class="placeholder">Press a key to see the result here</p>`;
});
