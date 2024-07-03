
const bgAnimated = document.getElementById('bgAnimated');
const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('colorBox');
  bgAnimated.append(colorBox);
}

// accrodian
const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconopen");
const closeIcon = document.getElementsByClassName("iconclose");



for (let i = 0; i < ourItemDiv.length; i++) {
    ourItemDiv[i].addEventListener("click", () => {
        ourItemDiv[i].classList.toggle("active");
    });
}






