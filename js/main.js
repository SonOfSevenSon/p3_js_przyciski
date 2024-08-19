const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.color');
const btn4 = document.querySelector('.remove-color');

function redColor() {
	btn3.classList.add('red');
	btn3.classList.remove('blue');
	// btn3.classList.toggle('red');
}

function blueColor() {
	btn3.classList.add('blue');
	btn3.classList.remove('red');
	// btn3.classList.toggle('blue');
}

function deleteColor() {
	btn3.classList.remove('red');
	btn3.classList.remove('blue');
}

btn1.addEventListener('click', redColor);
btn2.addEventListener('click', blueColor);
btn4.addEventListener('click', deleteColor);
