function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const refs = {
	wrapper: document.querySelector('#boxes'),
	input: document.querySelector('#controls > input'),
	createEl: document.querySelector('[data-create]'),
	destroyEl: document.querySelector('[data-destroy]'),
}

const createBoxes = function (amount) {
	let arrayElements = [];
	for (let i = 0; i < amount; i += 1) {
		const oneElement = document.createElement('div');
		const bgColor = getRandomHexColor();
		oneElement.style.backgroundColor = bgColor;
		const size = 30 + i * 10;
		oneElement.style.width = size + 'px';
		oneElement.style.height = size + 'px';
		arrayElements.push(oneElement);
	}

	refs.wrapper.append(...arrayElements);
}
const destroyBoxes = function () {
	refs.wrapper.innerHTML = '';
}

refs.createEl.addEventListener('click', (e) => {
	destroyBoxes();
	createBoxes(refs.input.value);
})
refs.destroyEl.addEventListener('click', (e) => {
	destroyBoxes();
})

