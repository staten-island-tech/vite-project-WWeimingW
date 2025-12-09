import "./style.css";

const memes = [
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
  { name: "Doge", img: "Doge.jpg", genre: "wholesome" },
  { name: "Grumpy Cat", img: "GrumpyCat.jpg", genre: "wholesome" },
  { name: "Success Kid", img: "SuccessKid.jpg", genre: "achievement" },
  { name: "Trollface", img: "Trollface.png", genre: "humor" },
  { name: "Skibidi Toilet", img: "SkibidiToilet.jpg", genre: "absurd" },
  { name: "Fanum Tax", img: "FanumTax.png", genre: "humor" },
  { name: "Two Buttons", img: "TwoButtons.webp", genre: "decision" },
  { name: "Expanding Brain", img: "ExpandingBrain.jpg", genre: "thinking" },
  {
    name: "Is This a Pigeon?",
    img: "IsThisAPigeon.webp",
    genre: "misunderstanding",
  },
  { name: "This Is Fine", img: "ThisIsFine.jpg", genre: "acceptance" },
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

const memeContainer = document.querySelector(".container");
const filterContainer = document.querySelector(".filter");
const selectedMemeImage = document.getElementById("selectedMemeImage");
const topMemeText = document.getElementById("topMemeText");
const bottomMemeText = document.getElementById("bottomMemeText");
const topTextInput = document.getElementById("topTextInput");
const bottomTextInput = document.getElementById("bottomTextInput");
const uploadInput = document.getElementById("uploadInput");
const urlInput = document.getElementById("urlInput");
const addUrlButton = document.getElementById("addUrlBtn");
const toggleModeButton = document.querySelector(".btn");

function generateMemeGallery(memes) {
  memeContainer.innerHTML = "";
  memes.forEach(function (meme) {
    const memeHTML = `<img class="img" src="/${meme.img}" alt="${meme.name}">`;
    memeContainer.insertAdjacentHTML("beforeend", memeHTML);
  });
}
generateMemeGallery(memes);

const genres = [
  "all",
  "reaction",
  "conflict",
  "wholesome",
  "achievement",
  "humor",
];
genres.forEach(function (genre) {
  const buttonHTML = `<button class="filter-btn" data-genre="${genre}">${genre}</button>`;
  filterContainer.insertAdjacentHTML("beforeend", buttonHTML);
});

const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedGenre = button.getAttribute("data-genre");
    if (selectedGenre === "all") {
      generateMemeGallery(memes);
    } else {
      const filteredMemes = memes.filter(function (meme) {
        return meme.genre === selectedGenre;
      });
      generateMemeGallery(filteredMemes);
    }
  });
});

memeContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("img")) {
    selectedMemeImage.src = e.target.src;
  }
});

uploadInput.addEventListener("change", function () {
  const file = uploadInput.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    selectedMemeImage.src = reader.result;
  };
  if (file) reader.readAsDataURL(file);
});

addUrlButton.addEventListener("click", function () {
  const imageUrl = urlInput.value;
  if (imageUrl) selectedMemeImage.src = imageUrl;
});

topTextInput.addEventListener("input", function () {
  topMemeText.textContent = topTextInput.value;
});
bottomTextInput.addEventListener("input", function () {
  bottomMemeText.textContent = bottomTextInput.value;
});

toggleModeButton.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
