const refs = {
	decrement: document.querySelector('[data-action="decrement"]'),
	increment: document.querySelector('[data-action="increment"]'),
	valueEl: document.querySelector('#value')
}

let counterValue = 0;

const updateValue = function () {
	refs.valueEl.textContent = counterValue;
}

refs.decrement.addEventListener('click', () => {
	counterValue -= 1;
	updateValue()
})

refs.increment.addEventListener('click', () => {
	counterValue += 1;
	updateValue()
})
