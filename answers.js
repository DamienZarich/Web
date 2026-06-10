const answers = [
  "Reply Hazy",
  "It is Certain",
  "Ask Again Later",
  "The answer is No",
  "Yes",
  "My sources point to no",
  "Outlook is Good",
];
const ball = document.getElementById("Eight-Ball");
const textAnswer = document.getElementById("textAnswer");

let lastX = null;
let lastY = null;
let isShaking = null;
let shakeTimeout = null;

ball.addEventListener("mousemove", (event) => {
  console.log("Mouse is moving over the ball!");
  if (isShaking) return;
  const currentX = event.clientX;
  const currentY = event.clientY;

  if (lastX !== null && lastY !== null) {
    const deltaX = Math.abs(currentX - lastX);
    const deltaY = Math.abs(currentY - lastY);
    const Speed = deltaX + deltaY;

    if (Speed > 50) {
      startShake();
    }
  }
  lastX = currentX;
  lastY = currentY;
});
function startShake() {
  isShaking = true;
  textAnswer.style.opacity = 0;
  ball.classList.add("shake-animation");

  shakeTimeout = setTimeout(() => {
    stopShake();
  }, 1000);
}
function stopShake() {
  ball.classList.remove("shake-animation");

  const randomIndex = Math.floor(Math.random() * answers.length);
  const randomAnswer = answers[randomIndex];

  textAnswer.innerText = randomAnswer;
  textAnswer.style.opacity = 1;

  setTimeout(() => {
    isShaking = false;
  }, 500);
}
