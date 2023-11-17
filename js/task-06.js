const input = document.querySelector('#validation-input');
const inputNeedLength = Number(input.dataset.length);


input.addEventListener('blur', (event) => {
	if (event.currentTarget.value.length === inputNeedLength) {
		console.log('inputNeedLength', inputNeedLength)
		console.log('event.currentTarget.value.length', event.currentTarget.value.length)
		event.currentTarget.classList.remove('invalid');
		event.currentTarget.classList.add('valid');
	} else {
		event.currentTarget.classList.remove('valid');
		event.currentTarget.classList.add('invalid');
	}
})