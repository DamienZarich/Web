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
const answer = document.getElementById("TextAnswer");

let lastX = null;
let lastY = null;
let isShaking = null;
let shakeTimeout = null;

ball.addEventListener("mousemove", (event) => {
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
}
