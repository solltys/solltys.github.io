const faqToggle = document.querySelectorAll(".faq-toggle");

faqToggle.forEach((faqToggle) => {
  faqToggle.addEventListener("click", () => {
    faqToggle.parentNode.classList.toggle("active");
  });
});
