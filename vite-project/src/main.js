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

const elements = {
  memeContainer: document.querySelector(".container"),
  filterContainer: document.querySelector(".filter"),
  selectedImg: document.getElementById("selectedMemeImage"),
  topText: document.getElementById("topMemeText"),
  bottomText: document.getElementById("bottomMemeText"),
  topInput: document.getElementById("topTextInput"),
  bottomInput: document.getElementById("bottomTextInput"),
  uploadInput: document.getElementById("uploadInput"),
  urlInput: document.getElementById("urlInput"),
  addUrlBtn: document.getElementById("addUrlBtn"),
  toggleBtn: document.querySelector(".btn"),
};

function showMemes(list) {
  elements.memeContainer.innerHTML = "";
  list.forEach(function (meme) {
    const imgTag = `<img class="img" src="/${meme.img}" alt="${meme.name}">`;
    elements.memeContainer.insertAdjacentHTML("beforeend", imgTag);
  });
}

showMemes(memes);

// --- FILTER BUTTONS ---
const genres = [
  "all",
  "reaction",
  "conflict",
  "wholesome",
  "achievement",
  "humor",
];

genres.forEach(function (g) {
  const btn = `<button class="filter-btn" data-genre="${g}">${g}</button>`;
  elements.filterContainer.insertAdjacentHTML("beforeend", btn);
});

document.querySelectorAll(".filter-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    const type = button.getAttribute("data-genre");

    if (type === "all") {
      showMemes(memes);
    } else {
      const result = memes.filter(function (m) {
        return m.genre === type;
      });
      showMemes(result);
    }
  });
});

elements.memeContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("img")) {
    elements.selectedImg.src = e.target.src;
  }
});

elements.uploadInput.addEventListener("change", function () {
  const file = elements.uploadInput.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    elements.selectedImg.src = reader.result;
  };
  if (file) reader.readAsDataURL(file);
});

elements.addUrlBtn.addEventListener("click", function () {
  if (elements.urlInput.value !== "") {
    elements.selectedImg.src = elements.urlInput.value;
  }
});

elements.topInput.addEventListener("input", function () {
  elements.topText.textContent = elements.topInput.value;
});
elements.bottomInput.addEventListener("input", function () {
  elements.bottomText.textContent = elements.bottomInput.value;
});

elements.toggleBtn.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.remove("cool");
    document.body.classList.add("warm");
  } else {
    document.body.classList.remove("warm");
    document.body.classList.add("cool");
  }
});
