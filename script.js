const storyBtn = document.querySelectorAll(".story-btn");

storyBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});
