"use strict";
const simpleBtn = document.querySelector(".simple");
const hexBtn = document.querySelector(".hex");
const simpleSection = document.querySelector("#simple");
const hexSection = document.querySelector("#hex");
const hint = document.querySelector(".info");
const colorBtn = document.querySelector("#color-btn");
const copyColorBtn = document.querySelector("#copy-color-btn");
const color = document.querySelector(".color");
const updateTitle = document.querySelector("title");
const colors = [
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
const hex = [
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
    copyColorBtn.style.display = "inline-block";
};
const findSectionToRun = () => {
    if (simpleBtn.style.color === "red") {
        simpleFunction();
    }
    else if (hexBtn.style.color === "red") {
        hexFunction();
    }
};
const simpleFunction = () => {
    let randomNumber = getRandomNumColor();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    afterButtonClick();
    simpleVisuals();
};
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
simpleBtn === null || simpleBtn === void 0 ? void 0 : simpleBtn.addEventListener("click", simpleVisuals);
hexBtn === null || hexBtn === void 0 ? void 0 : hexBtn.addEventListener("click", hexVisuals);
colorBtn === null || colorBtn === void 0 ? void 0 : colorBtn.addEventListener("click", findSectionToRun);
