'use strict';

const generateBtn = document.querySelector("button");
const colorContainer = document.querySelector(".colors");

window.addEventListener('load', () => {
    generateBtn.click();
});

generateBtn.addEventListener('click', () => {
    colorContainer.innerHTML = '';
    let randomColor = '';
    for(let i = 0; i < 6; i++){
        randomColor += '#' + Math.random().toString(16).slice(-6) + ',';
    }
    let colorArr = randomColor.split(',');
    for(let i = 0; i < 6; i++){
        colorContainer.innerHTML += `
            <div class='color' style='background-color: ${colorArr[i]}'></div>
        `;
    }
});