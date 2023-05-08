const categories = document.querySelector("#categories");
console.log(`Number of categories:${categories.children.length}`);
categories.querySelectorAll(".item").forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName} \ Elements: ${elementsCount}`);
});
