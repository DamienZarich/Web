const answers = [
  "Reply Hazy",
  "It is Certain",
  "Ask Again Later",
  "The answer is No",
  "Yes",
  "My sources point to no",
  "Outlook is Good",
];
function wiggle() {
  isShaking = true;
  ball.classList.add("wiggle-animation");
}
const goodAnswers = ["Yes", "It is Certain", "Outlook is Good"];
let totalMovement = 0;
const ball = document.getElementById("Eight-Ball");
const textAnswer = document.getElementById("textAnswer");
const glass = document.getElementById("glassPart");

let lastX = null;
let lastY = null;
let lastTime = null;
let isShaking = false;
let shakeStopout = null;

ball.addEventListener("mousemove", (event) => {
  console.log("Mouse is moving over the ball!");
  if (isShaking) return;
  const currentX = event.clientX;
  const currentY = event.clientY;

  if (lastX !== null && lastY !== null) {
    const deltaX = Math.abs(currentX - lastX);
    const deltaY = Math.abs(currentY - lastY);

    totalMovement += deltaX + deltaY;

    if (totalMovement > 1000) {
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

  shakeStopout = setTimeout(() => {
    stopShake();
  }, 1000);
}
function stopShake() {
  ball.classList.remove("shake-animation");

  const randomIndex = Math.floor(Math.random() * answers.length);
  const randomAnswer = answers[randomIndex];

  textAnswer.innerText = randomAnswer;
  textAnswer.style.opacity = 1;

  totalMovement = 0;

  setTimeout(() => {
    isShaking = false;
  }, 100);
  if (goodAnswers.includes(randomAnswer)) {
    glass.style.background =
      "radial-gradient(circle at 50% 50%, #00ff66, #002208)";
  }
}
