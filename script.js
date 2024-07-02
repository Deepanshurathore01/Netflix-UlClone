var a = document.querySelector('.signup');

a.addEventListener('click', function() {
    // alert("Hello world");
});

const bgAnimated = document.getElementById('bgAnimate');
const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('colorBox');
  bgAnimated.append(colorBox);
}
