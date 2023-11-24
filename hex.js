const simpleBtn = document.querySelector('.simple');
const hexBtn = document.querySelector('.hex');
const colorBtn = document.getElementById('color-btn');
const color = document.querySelector('.color');
const hint = document.querySelector('.info');

hexBtn.style.color = 'red';

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  colorBtn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
      hexColor += hex[getRandomNumHex()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    colorBtn.innerHTML = 'change color';
    hint.innerHTML = '';
  })

function getRandomNumHex(){
  return Math.floor(Math.random() * hex.length);
}
