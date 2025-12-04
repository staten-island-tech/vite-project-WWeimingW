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

generateMeme(memes);
const container = document.querySelector(".container");

function renderMemes(list) {
  container.innerHTML = "";
  list.forEach((memeimage) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <div class="memeimage">
        <img class="img" src="${memeimage.img}" alt="${memeimage.name}">
        <p>${memeimage.name}</p>
      </div>
    `
    );
  });
}

// initial render
renderMemes(memes);

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
const filterContainer = document.querySelector(".filter");

// add an "all" button first
filterContainer.insertAdjacentHTML(
  "beforeend",
  `<button class="filter-btn" data-filter="all">all</button>`
);

filterTypes.forEach((genre) => {
  filterContainer.insertAdjacentHTML(
    "beforeend",
    `<button class="filter-btn" data-filter="${genre}">${genre}</button>`
  );
});

function filterItems(type) {
  if (type === "all") {
    renderMemes(memes);
    return;
  }
  const filtered = memes.filter((m) => m.genre === type);
  renderMemes(filtered);
}

// attach handlers
const filterButtons = filterContainer.querySelectorAll(".filter-btn");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const t = btn.getAttribute("data-filter");
    filterItems(t);
  });
});
