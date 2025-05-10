const left = document.querySelector(".left");
const right = document.querySelector(".right");
const contaier = document.querySelector(".container");

left.addEventListener("mouseenter", () => contaier.classList.add("hover-left"));
left.addEventListener("mouseleave", () =>
  contaier.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  contaier.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  contaier.classList.remove("hover-right")
);
