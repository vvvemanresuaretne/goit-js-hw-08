const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Кількість категорій: ${categoryItems.length}`);
categoryItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul li').length;
    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${elementsCount}`);
});
const style = document.createElement("style");
style.textContent = `
  .gallery {
    display: flex;
    gap: 10px;
    list-style: none;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
  }
  .gallery-item {
    flex: 1 1 calc(33.333% - 10px);
    max-width: calc(33.333% - 10px);
    box-sizing: border-box;
  }
  .gallery-image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
document.head.appendChild(style);
