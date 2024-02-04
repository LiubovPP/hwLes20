//1. Создайте HTML-страницу с кнопкой. При клике на кнопку измените текст элемента с id "target" на "Привет, мир!" с использованием JavaScript и DOM.

const targetNode = document.querySelector(".target");
const textNode = document.createElement ("p")

targetNode.addEventListener ("click", () => {
    textNode.innerText = "Привет, мир!";
    // const randomNumber = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    // targetNode.innerText = randomNumber;
    
 });
 targetNode.append(textNode);

 //2.Создайте HTML-страницу с формой (input и button). При отправке формы выведите в консоль введенное значение из input с использованием JavaScript и DOM.

 const formNode = document.querySelector("#form");
 const textInput = document.getElementById("textInput"); // сохраним ввод с экрана
 formNode.addEventListener ("submit", event=> {
    event.preventDefault();
    console.log("Введенное значение:", textInput.value);
 });

 // Создайте HTML-страницу, в которой присутсвует кнопка. При нажатии на нее текст кнопки меняется на случайное число от 5 до 15.

 // см. строка 8,9