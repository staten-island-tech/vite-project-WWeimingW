const memes = [
  { name: "Distracted Boyfriend" },
  { name: "Drake Hotline Bling" },
  { name: "Woman Yelling at a Cat" },
  { name: "Doge" },
  { name: "Success Kid" },
  { name: "Grumpy Cat" },
  { name: "Trollface" },
  { name: "Skibidi Toilet" },
  { name: "Fanum Tax" },
  { name: "NPC Meme" },
  { name: "Surprised Pikachu" },
  { name: "Two Buttons" },
  { name: "Expanding Brain" },
  { name: "Is This a Pigeon?" },
  { name: "This Is Fine" },
  { name: "Let Him Cook" },
  { name: "Rizz" },
  { name: "Sigma Male" },
  { name: "Ohio Memes" },
  { name: "Wojak (Doomer, Soyjak, etc.)" },
];

let container = null;
function injectMeme(meme) {
  memes.forEach((meme) => (container = document.querySelector(".app")));
  container.insertAdjacentHTML();
  ("afterbegin");
}
