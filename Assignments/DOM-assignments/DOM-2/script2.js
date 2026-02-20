const storyContainer = document.querySelector(".story-container"); //Selects the container box, the three genre buttons, and the paragraph where the story will be displayed.
const scaryStoryBtn = document.querySelector("#scary-btn");
const funnyStoryBtn = document.querySelector("#funny-btn");
const adventureStoryBtn = document.querySelector("#adventure-btn");
const resultParagraph = document.querySelector("#result");

const storyObj = { //All three stories and their associated border colors are stored in one object. Each genre is a key, and its value holds both the story text and a color — red for scary, yellow for funny, green for adventure.
  scary: {
    story: "In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.",
    borderColor: "#ee4b2b"
  },
  funny: {
    story: "During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.",
    borderColor: "#f1be32"
  },
  adventure: {
    story: "Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.",
    borderColor: "#acd157"
  }
};

//Takes a genre name as input, looks it up in storyObj, then updates the paragraph text and the container's border color to match. The if check is a safety guard — it ensures the genre actually exists in the object before trying to access it.
function displayStory(genre) {
  if (storyObj[genre]) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

//Each button is wired up to call displayStory() with its corresponding genre name when clicked.
scaryStoryBtn.addEventListener("click", () => {
  displayStory("scary");
});

funnyStoryBtn.addEventListener("click", () => {
  displayStory("funny");
});

adventureStoryBtn.addEventListener("click", () => {
  displayStory("adventure");
});