const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let button = document.querySelector('#controlBtn');
let color = document.querySelector('#color');

const randomNumber = () => {
	return Math.floor(Math.random() * hex.length);
};

button.addEventListener('click', () => {
	let hexColor = '#';
	
	for (let i = 0; i < 6; i++) {
		let random = randomNumber();
		hexColor += hex[random];
	}

	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
});