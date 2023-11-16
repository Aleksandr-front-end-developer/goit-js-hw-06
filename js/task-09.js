function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}


const wrapper = document.body;
const colorText = wrapper.querySelector('.color');
const colorButtonChange = wrapper.querySelector('.change-color');

colorButtonChange.addEventListener('click', (event) => {
	const color = getRandomHexColor();
	wrapper.style.backgroundColor = color;
	colorText.textContent = color;
})
