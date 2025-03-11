const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Кількість категорій: ${categoryItems.length}`);
categoryItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul li').length;
    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${elementsCount}`);
});
