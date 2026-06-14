const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];
function wiggle() {
  isShaking = true;
  ball.classList.add("wiggle-animation");
}
const shakeSound = new Audio("Magic8Audio.mp3");
const goodAnswers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
];
const redoAnswers = [
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
];
const badAnswers = [
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];
let totalMovement = 0;
const ball = document.getElementById("Eight-Ball");
const textAnswer = document.getElementById("StartText");
const glass = document.getElementById("glassPart");
const triangle = document.getElementById("triangle");

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
  triangle.style.opacity = 0;
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
  triangle.style.opacity = 1;

  totalMovement = 0;

  setTimeout(() => {
    isShaking = false;
  }, 100);

  textAnswer.style.paddingTop = "";
  textAnswer.style.paddingBottom = "";

  if (goodAnswers.includes(randomAnswer)) {
    triangle.style.background =
      "radial-gradient(circle at 50% 50%, #008120, #002208)";
    triangle.style.boxShadow =
      "0 0 60px 30px rgba(30, 151, 0, 0.8), inset 0 0 55px rgba(0, 255, 13, 0.4)";
    triangle.style.rotate = "180deg";
    textAnswer.style.paddingBottom = "180px";
  } else if (redoAnswers.includes(randomAnswer)) {
    triangle.style.background =
      "radial-gradient(circle at 50% 50%, #adcc00, #002208)";
    triangle.style.rotate = "0deg";
    triangle.style.boxShadow =
      "0 0 60px 30px rgba(136, 151, 0, 0.6), inset 0 0 55px rgba(230, 255, 4, 0.4)";
    textAnswer.style.paddingTop = "90px";
  } else if (badAnswers.includes(randomAnswer)) {
    triangle.style.background =
      "radial-gradient(circle at 50% 50%, #b90000, #002208)";
    triangle.style.boxShadow =
      "0 0 60px 30px rgba(185, 0, 0, 0.6), inset 0 0 55px rgba(255, 0, 0, 0.4)";
    triangle.style.rotate = "0deg";
    textAnswer.style.paddingTop = "90px";
  }
}
