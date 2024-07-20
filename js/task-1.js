const number = document.querySelectorAll(".item").length;
console.log("Number of categories: ", number)

const items = document.querySelectorAll('.item');

items.forEach(
    item => {
        const categoriesName = item.querySelector("h2").textContent; 
        console.log(`Category: ${categoriesName}`)
        const elements = item.querySelectorAll("li");
        console.log("Elements: ", elements.length)
    }
)
