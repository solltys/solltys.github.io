const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const sizeViz = document.getElementById("sizeViz");

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false;
let color = "black";
let x;
let y;

setSizeViz();
updateColorScreen();

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2; /* becuse line is half of circle  */
  ctx.stroke();
}
function updateSizeOnScreen() {
  sizeEl.innerText = size;
}
colorEl.addEventListener("change", (e) => {
  color = e.target.value;
  setSizeViz();
});

function setSizeViz() {
  sizeViz.style.backgroundColor = color;
  sizeViz.style.height = `${size * 2}px`;
  sizeViz.style.width = `${size * 2}px`;
}
function updateColorScreen() {
  colorEl.value = color;
}
increaseBtn.addEventListener("click", () => {
  size += 1;
  if (size > 40) {
    size = 40;
  }
  setSizeViz();
  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 1;
  if (size < 5) {
    size = 5;
  }
  setSizeViz();
  updateSizeOnScreen();
});

clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  size = 10;
  color = "black";
  setSizeViz();
  updateSizeOnScreen();
  updateColorScreen();
});
