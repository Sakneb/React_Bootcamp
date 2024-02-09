// Task 1: Change the color of the greeting text
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", function () {
  // TODO: Complete the function to change the 'greeting' element's color to a random color
  colorButton.style.color = getRandomColor();
});

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Task 2: Change the text content of the greeting
const textButton = document.getElementById("textButton");
textButton.addEventListener("click", function () {
  // TODO: Complete the function to change the text of the 'greeting' element to "Hello, JavaScript!"
  textButton.textContent = "Hello, JavaScript";
});
