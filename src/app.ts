// type definitions
type NullableHTMLElement = HTMLElement | null; // for all html elements

// fetch from html document
const simpleBtn: NullableHTMLElement = document.querySelector(".simple");
const hexBtn: NullableHTMLElement = document.querySelector(".hex");
const simpleSection: NullableHTMLElement = document.querySelector("#simple");
const hexSection: NullableHTMLElement = document.querySelector("#hex");
const hint: NullableHTMLElement = document.querySelector(".info");
const colorBtn: NullableHTMLElement = document.querySelector("#color-btn");
const copyColorBtn: NullableHTMLElement =
  document.querySelector("#copy-color-btn");
const color: NullableHTMLElement = document.querySelector(".color");
const updateTitle: NullableHTMLElement = document.querySelector("title");

// hard coded colors for simple section
const colors: string[] = [
  "red",
  "orange",
  "yellow",
  "green",
  "pink",
  "indigo",
  "coral",
  "cyan",
  "grey",
  "violet",
  "teal",
  "gold",
  "silver",
  "bronze",
  "magenta",
  "peach",
  "lavender",
  "plum",
  "tan",
  "olive",
  "crimson",
  "khaki",
  "hotpink",
  "firebrick",
  "salmon",
  "darkred",
  "lightcoral",
  "rosybrown",
  "palevioletred",
  "orchid",
  "mediumvioletred",
  "deeppink",
  "fuchsia",
  "mediumorchid",
  "mediumpurple",
  "blueviolet",
  "darkviolet",
  "darkorchid",
  "darkmagenta",
  "purple",
  "rebeccapurple",
  "mediumslateblue",
  "slateblue",
  "darkslateblue",
  "greenyellow",
  "chartreuse",
  "lawngreen",
  "lime",
  "limegreen",
  "palegreen",
  "lightgreen",
  "mediumspringgreen",
  "springgreen",
  "mediumseagreen",
  "seagreen",
  "forestgreen",
  "darkgreen",
  "yellowgreen",
  "olivedrab",
  "darkolivegreen",
  "mediumaquamarine",
  "darkseagreen",
  "lightseagreen",
  "darkcyan",
  "aqua",
  "lightcyan",
  "paleturquoise",
  "aquamarine",
  "turquoise",
  "mediumturquoise",
  "darkturquoise",
  "cadetblue",
  "steelblue",
  "lightsteelblue",
  "powderblue",
  "lightblue",
  "skyblue",
  "lightskyblue",
  "deepskyblue",
  "dodgerblue",
  "cornflowerblue",
  "royalblue",
  "blue",
  "mediumblue",
  "darkblue",
  "navy",
  "midnightblue",
  "cornsilk",
  "blanchedalmond",
  "bisque",
  "navajowhite",
  "wheat",
  "burlywood",
  "sandybrown",
  "goldenrod",
  "darkgoldenrod",
  "peru",
  "chocolate",
  "saddlebrown",
  "sienna",
];

type mixedArray = (number | string)[];

// color options for hex section
const hex: mixedArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const getRandomNumColor = (): number => {
  return Math.floor(Math.random() * colors.length);
};

const hexVisuals = (): void => {
  simpleBtn!.style.color = "black";
  hexBtn!.style.color = "red";
  updateTitle!.textContent = "hex section";
};

const simpleVisuals = () => {
  simpleBtn!.style.color = "red";
  hexBtn!.style.color = "black";
  updateTitle!.textContent = "simple section";
};

const getRandomNumHex = (): number => {
  return Math.floor(Math.random() * hex.length);
};

const afterButtonClick = () => {
  colorBtn!.innerHTML = "change color";
  hint!.innerHTML = "";
  copyColorBtn!.style.display = "inline-block";
};

const findSectionToRun = () => {
  if (simpleBtn!.style.color === "red") {
    simpleFunction();
  } else if (hexBtn!.style.color === "red") {
    hexFunction();
  }
};

const simpleFunction = () => {
  let randomNumber = getRandomNumColor();
  document.body.style.backgroundColor = colors[randomNumber];
  color!.textContent = colors[randomNumber];
  afterButtonClick();
  simpleVisuals(); // find out what this is
};

// run on window load
simpleVisuals();

const hexFunction = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumHex()];
  }
  color!.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  afterButtonClick();
};

simpleBtn?.addEventListener("click", simpleVisuals);
hexBtn?.addEventListener("click", hexVisuals);

colorBtn?.addEventListener("click", findSectionToRun);

// document
//   .getElementById("hamburger-icon")
//   .addEventListener("click", function () {
//     const dropdownMenu = document.getElementById("dropdown-menu");
//     const hamburgerIcon = document.getElementById("hamburger-icon");

//     if (dropdownMenu.style.display === "none") {
//       dropdownMenu.style.display = "block";
//       hamburgerIcon.className = "big times icon"; // change to 'x' icon
//     } else {
//       dropdownMenu.style.display = "none";
//       hamburgerIcon.className = "big bars icon"; // change back to hamburger icon
//     }
//   });
