const input = document.querySelector('#validation-input');
const inputNeedLength = input.dataset.length;


input.addEventListener('blur', (event) => {
	if (event.currentTarget.value.length === 6) {
		event.currentTarget.classList.remove('invalid');
		event.currentTarget.classList.add('valid');
	} else {
		event.currentTarget.classList.remove('valid');
		event.currentTarget.classList.add('invalid');
	}
})