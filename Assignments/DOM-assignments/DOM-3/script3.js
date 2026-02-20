const emojiButtons = document.querySelectorAll(".emoji-btn");
const result = document.querySelector("#result");

emojiButtons.forEach(button => {
  button.addEventListener("click", () => {
    result.textContent = `You are feeling ${button.textContent}`;
  });
});