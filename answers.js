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
const answer = document.getElementById("text");

let lastX = null;
let lastY = null;
let isShaking = null;
let shakeTimeout = null;
