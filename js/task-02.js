const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

function createItemElement(titleElement) {
	const itemEl = document.createElement('li');
	itemEl.textContent = titleElement;
	itemEl.classList.add('item');
	return itemEl;
}

const ingredientsElements = ingredients.map(createItemElement);

const categoriesContainer = document.querySelector('ul#ingredients');
categoriesContainer.append(...ingredientsElements);

