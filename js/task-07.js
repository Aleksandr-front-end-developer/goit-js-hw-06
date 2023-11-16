const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

let fontSizeText = range.value;

const updatefontSize = function () {
	text.style.fontSize = fontSizeText + 'px';
}
updatefontSize();

range.addEventListener('input', (event) => {
	fontSizeText = event.currentTarget.value;
	updatefontSize();
})





