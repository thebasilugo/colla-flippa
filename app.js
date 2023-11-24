// fetch from html document
const simpleBtn = document.querySelector(".simple");
const hexBtn = document.querySelector(".hex");
const simpleSection = document.querySelector("#simple");
const hexSection = document.querySelector("#hex");
const hint = document.querySelector(".info");
const colorBtn = document.querySelector("#color-btn");
const color = document.querySelector(".color");
const updateTitle = document.querySelector("title");

// hard coded colors for simple section
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "white",
  "indigo",
  "brown",
  "coral",
  "chocolate",
  "beige",
  "cyan",
  "gray",
  "grey",
  "maroon",
  "navy",
  "snow",
  "violet",
];

// color options for hex section
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNumColor = () => {
  return Math.floor(Math.random() * colors.length);
};

const hexVisuals = () => {
  simpleBtn.style.color = "black";
  hexBtn.style.color = "red";
  updateTitle.textContent = "hex section";
};

const simpleVisuals = () => {
  simpleBtn.style.color = "red";
  hexBtn.style.color = "black";
  updateTitle.textContent = "simple section";
};

const getRandomNumHex = () => {
  return Math.floor(Math.random() * hex.length);
};

const afterButtonClick = () => {
  colorBtn.innerHTML = "change color";
  hint.innerHTML = "";
};

const findSectionToRun = () => {
  if (simpleBtn.style.color === "red") {
    simpleFunction();
  } else if (hexBtn.style.color === "red") {
    hexFunction();
  }
};

const simpleFunction = () => {
  let randomNumber = getRandomNumColor();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  afterButtonClick();
  runSimple();
};

// run on window load
simpleVisuals();

const hexFunction = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumHex()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  afterButtonClick();
};

simpleBtn.addEventListener("click", simpleVisuals);
hexBtn.addEventListener("click", hexVisuals);

colorBtn.addEventListener("click", findSectionToRun);
