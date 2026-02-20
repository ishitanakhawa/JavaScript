const buttons = document.querySelectorAll(".favorite-icon"); //Grabs every element on the page that has the class favorite-icon and stores them as a list.

buttons.forEach(button => {
  //Iterates over each button and attaches the same click behavior to all of them independently.
  button.addEventListener("click", () => {
    button.classList.toggle("filled");
    //Each click either adds or removes the filled class. This is what tracks whether the button is in a favorited or unfavorited state.

    if (button.classList.contains("filled")) {
      button.innerHTML = "&#10084;";
    } else {
      button.innerHTML = "&#9825;";
    }
    //After toggling, it checks the current state and swaps the icon — a filled heart (❤) when favorited, an outline heart (♡) when not.
  });
});