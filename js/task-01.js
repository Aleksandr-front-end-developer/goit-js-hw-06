const mainCategory = document.querySelector('ul#categories');
const categoriesAll = mainCategory.querySelectorAll('li.item');

console.log('Number of categories: ', categoriesAll.length);

categoriesAll.forEach(item => {
	const titleCategory = item.firstElementChild.textContent;
	const countEl = item.querySelectorAll('li').length;
	console.log('Category: ', titleCategory);
	console.log('Elements: ', countEl);
})








