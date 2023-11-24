const simpleBtn = document.querySelector('.simple');
const hexBtn = document.querySelector('.hex');
const hint = document.querySelector('.info');

simpleBtn.style.color = 'red';

// SIMPLE functionality

const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white", "indigo", "brown", "coral", "chocolate", "beige", "cyan", "gray", "grey", "maroon", "navy", "snow", "violet"];
const colorBtn = document.getElementById("color-btn");
const color = document.querySelector('.color');

colorBtn.addEventListener('click', function(){
  let randomNumber = getRandomNumColor();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  colorBtn.innerHTML = 'change color';
  runSimple();
})

simpleBtn.addEventListener('click', function(){
  runSimple();
})

function runSimple(){
  hint.style.display = 'none';
  simpleBtn.style.color = 'red';
  hexBtn.style.color = 'black';
  document.body.style.backgroundColor = color.textContent;
}

function getRandomNumColor(){
  return Math.floor(Math.random() * colors.length);
}
