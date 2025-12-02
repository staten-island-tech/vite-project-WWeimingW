import "./style.css";

const memes = [
  {
    name: "Distracted Boyfriend",
    img: "DistractedBoyfriend.webp",
    genre: "relationship",
  },
  {
    name: "Drake Hotline Bling",
    img: "DrakeHotlineBling.jpg",
    genre: "reaction",
  },
  {
    name: "Woman Yelling at a Cat",
    img: "WomanYellingAtACat.jpg",
    genre: "argument",
  },
  { name: "Doge", img: "Doge.jpg", genre: "wholesome" },
  { name: "Success Kid", img: "SuccessKid.jpg", genre: "achievement" },
  { name: "Grumpy Cat", img: "GrumpyCat.jpg", genre: "wholesome" },
  { name: "Trollface", img: "Trollface.png", genre: "meme" },
  { name: "Skibidi Toilet", img: "SkibidiToilet.jpg", genre: "absurd" },
  { name: "Fanum Tax", img: "FanumTax.png", genre: "tax" },
  { name: "NPC Meme", img: "NPCMeme.png", genre: "gaming" },
  {
    name: "Surprised Pikachu",
    img: "SurprisedPikachu.webp",
    genre: "reaction",
  },
  { name: "Two Buttons", img: "TwoButtons.webp", genre: "decision" },
  {
    name: "Expanding Brain",
    img: "ExpandingBrain.jpg",
    genre: "intelligence",
  },
  {
    name: "Is This a Pigeon?",
    img: "IsThisAPigeon.webp",
    genre: "misunderstanding",
  },
  { name: "This Is Fine", img: "ThisIsFine.jpg", genre: "acceptance" },
  { name: "Let Him Cook", img: "LetHimCook.jpg", genre: "cooking" },
  { name: "Rizz", img: "Rizz.png", genre: "flirting" },
  { name: "Sigma Male", img: "SigmaMale.jpg", genre: "masculinity" },
  {
    name: "Wojak (Doomer, Soyjak, etc.)",
    img: "Wojak.jpg",
    genre: "character",
  },
];
function generateMeme(memes) {
  memes.forEach((memeimage) => {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
      "afterbegin",
      `<div class="memeimage">
      <img class = "img"src="${memeimage.img}" alt="${memeimage.alt}">
    </div>`
    );
  });
}
generateMeme(memes);
