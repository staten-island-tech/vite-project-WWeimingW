import "./style.css";

const memes = [
  // Reaction
  {
    name: "Drake Hotline Bling",
    img: "DrakeHotlineBling.jpg",
    genre: "reaction",
  },
  {
    name: "Surprised Pikachu",
    img: "SurprisedPikachu.webp",
    genre: "reaction",
  },

  // Conflict / Drama
  {
    name: "Distracted Boyfriend",
    img: "DistractedBoyfriend.webp",
    genre: "conflict",
  },
  {
    name: "Woman Yelling at a Cat",
    img: "WomanYellingAtACat.jpg",
    genre: "conflict",
  },

  // Wholesome / Positive
  { name: "Doge", img: "Doge.jpg", genre: "wholesome" },
  { name: "Grumpy Cat", img: "GrumpyCat.jpg", genre: "wholesome" },

  // Achievement / Success
  { name: "Success Kid", img: "SuccessKid.jpg", genre: "achievement" },

  // Humor / Absurd
  { name: "Trollface", img: "Trollface.png", genre: "humor" },
  { name: "Skibidi Toilet", img: "SkibidiToilet.jpg", genre: "absurd" },
  { name: "Fanum Tax", img: "FanumTax.png", genre: "humor" },

  // Decision / Thinking
  { name: "Two Buttons", img: "TwoButtons.webp", genre: "decision" },
  { name: "Expanding Brain", img: "ExpandingBrain.jpg", genre: "thinking" },
  {
    name: "Is This a Pigeon?",
    img: "IsThisAPigeon.webp",
    genre: "misunderstanding",
  },
  { name: "This Is Fine", img: "ThisIsFine.jpg", genre: "acceptance" },

  // Character / Persona
  { name: "NPC Meme", img: "NPCMeme.png", genre: "character" },
  {
    name: "Wojak (Doomer, Soyjak, etc.)",
    img: "Wojak.jpg",
    genre: "character",
  },
  { name: "Let Him Cook", img: "LetHimCook.jpg", genre: "persona" },
  { name: "Rizz", img: "Rizz.png", genre: "persona" },
  { name: "Sigma Male", img: "SigmaMale.jpg", genre: "persona" },
];

function generateMeme(memes) {
  memes.forEach((memeimage) => {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
      "afterbegin",
      `<div class="memeimage">
      <img class="img" src="/${memeimage.img}" alt="${memeimage.name}">
    </div>`
    );
  });
}
generateMeme(memes);

const filterTypes = [
  "persona",
  "character",
  "acceptance",
  "decision",
  "thinking",
  "humor",
  "achievement",
  "wholesome",
  "absurd",
];
const filter = document.querySelector(".filter");

filter.insertAdjacentHTML(
  "beforeend",
  `<button class="filter-btn" data-type="all">all</button>`
);
filterTypes.forEach((genre) => {
  filter.insertAdjacentHTML(
    "beforeend",
    `<button class="filter-btn" data-type="${genre}">${genre}</button>`
  );
});

function filterItems(type) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  if (!type || type === "all") {
    generateMeme(memes);
    return;
  }
  const filteredMemes = memes.filter((meme) => meme.genre === type);
  generateMeme(filteredMemes);
}

const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterType = button.getAttribute("data-type");
    filterItems(filterType);
  });
});

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
