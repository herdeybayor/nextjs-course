const list = document.querySelector("[data-list]");
const input = document.querySelector("[data-input]");
const addButton = document.querySelector("[data-button]");

const foods = new ListBinding(list);

foods._textList = ["Apple", "Banana", "Orange"];

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value;
    if (text) {
        foods.add(text);
        input.value = "";
    }
});
