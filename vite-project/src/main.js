import "./style.css";
const memes = [
  {
    name: "Distracted Boyfriend",
    img: "DistractedBoyfriend.webp",
    genre: "relationship",
  },
  {
    name: "Drake Hotline Bling",
    img: "DrakeHotlineBling.webp",
    genre: "reaction",
  },
  {
    name: "Woman Yelling at a Cat",
    img: "WomanYellingAtACat.webp",
    genre: "argument",
  },
  { name: "Doge", img: "Doge.webp", genre: "wholesome" },
  { name: "Success Kid", img: "SuccessKid.webp", genre: "achievement" },
  { name: "Grumpy Cat", img: "GrumpyCat.webp", genre: "wholesome" },
  { name: "Trollface", img: "Trollface.webp", genre: "meme" },
  { name: "Skibidi Toilet", img: "SkibidiToilet.webp", genre: "absurd" },
  { name: "Fanum Tax", img: "FanumTax.webp", genre: "tax" },
  { name: "NPC Meme", img: "NPCMeme.webp", genre: "gaming" },
  {
    name: "Surprised Pikachu",
    img: "SurprisedPikachu.webp",
    genre: "reaction",
  },
  { name: "Two Buttons", img: "TwoButtons.webp", genre: "decision" },
  {
    name: "Expanding Brain",
    img: "ExpandingBrain.webp",
    genre: "intelligence",
  },
  {
    name: "Is This a Pigeon?",
    img: "IsThisAPigeon.webp",
    genre: "misunderstanding",
  },
  { name: "This Is Fine", img: "ThisIsFine.webp", genre: "acceptance" },
  { name: "Let Him Cook", img: "LetHimCook.webp", genre: "cooking" },
  { name: "Rizz", img: "Rizz.webp", genre: "flirting" },
  { name: "Sigma Male", img: "SigmaMale.webp", genre: "masculinity" },
  { name: "Ohio Memes", img: "OhioMemes.webp", genre: "location" },
  {
    name: "Wojak (Doomer, Soyjak, etc.)",
    img: "Wojak.webp",
    genre: "character",
  },
];

function generateMeme(memeArray) {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  memeArray.forEach((memeimage) => {
    container.insertAdjacentHTML(
      "afterbegin",
      `<div class="memeimage">
      <img src="${memeimage.img}" alt="${memeimage.alt}">
    </div>`
    );
  });
}
generateMeme(memes);
