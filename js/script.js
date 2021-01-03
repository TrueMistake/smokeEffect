const text = document.querySelector('.head-title');
const appText = document.querySelector('.layer');
const textArr = text.innerText.split('');
let time = 0.5;

const newEl = document.createElement('h1');
newEl.innerHTML = `
	    ${textArr.map(letter => {
			time += 0.4;
			return `<span class="letter" style="animation:animate 1s linear forwards; animation-delay: ${time}s;">${letter}</span>`
		}).join('')}`;
newEl.classList.add('overlay');
newEl.classList.add('title');

appText.appendChild(newEl);


