const colors = ['red', 'green', 'rgba(154,53,33)', '#1f2f2f'];
let button = document.querySelector('#controlBtn');
let color = document.querySelector('#color');

const randomNumber = () => {
	return Math.floor(Math.random() * colors.length);
};

button.addEventListener('click',() => {
	let random = randomNumber();
	console.log(random);
	
	document.body.style.backgroundColor = colors[random];
	color.textContent = colors[random];
});

