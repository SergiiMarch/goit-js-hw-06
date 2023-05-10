const categories = document.querySelector("#categories");
console.log(`Number of categories:${categories.children.length}`);
categories.querySelectorAll(".item").forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const elementsCount = category.lastElementChild.childElementCount;
  console.log(`Category: ${categoryName} \ Elements: ${elementsCount}`);
});
