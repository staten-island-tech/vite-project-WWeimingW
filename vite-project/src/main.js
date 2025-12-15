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
const selectedImg = document.getElementById("selectedMemeImage");
const topText = document.getElementById("topMemeText");
const bottomText = document.getElementById("bottomMemeText");
const topInput = document.getElementById("topTextInput");
const bottomInput = document.getElementById("bottomTextInput");
const urlInput = document.getElementById("urlInput");
const addUrlBtn = document.getElementById("addUrlBtn");
const toggleBtn = document.querySelector(".btn");

function showMemes(list) {
  memeContainer.innerHTML = "";
  list.forEach(function (meme) {
    const img = document.createElement("img");
    img.src = "/" + meme.img;
    img.className = "img";
    img.addEventListener("click", function () {
      selectedImg.src = img.src;
    });
    memeContainer.appendChild(img);
  });
}
showMemes(memes);

const genres = [
  "all",
  "reaction",
  "conflict",
  "wholesome",
  "achievement",
  "humor",
];

genres.forEach(function (genre) {
  const button = document.createElement("button");
  button.className = "filter-btn";
  button.textContent = genre;
  button.addEventListener("click", function () {
    if (genre === "all") {
      showMemes(memes);
    } else {
      const filteredMemes = memes.filter(function (meme) {
        return meme.genre === genre;
      });
      showMemes(filteredMemes);
    }
  });
  filterContainer.appendChild(button);
});

topInput.addEventListener("input", function () {
  topText.textContent = topInput.value;
});

bottomInput.addEventListener("input", function () {
  bottomText.textContent = bottomInput.value;
});

addUrlBtn.addEventListener("click", function () {
  if (urlInput.value !== "") {
    selectedImg.src = urlInput.value;
  }
});

toggleBtn.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.remove("cool");
    document.body.classList.add("warm");
  } else {
    document.body.classList.remove("warm");
    document.body.classList.add("cool");
  }
});
