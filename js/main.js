let figure = document.querySelector('.section__show > div');
let select = document.querySelector('.select');
let inp = document.querySelector('.inp');
const addTask = document.querySelector('.addTask');

(function standardBehavior() {
    figure.className = select.value;
    figure.style.backgroundColor = inp.value;
}());

function changeFigure() {
    figure.className = select.value;
}

function changeColor() {
    figure.style.backgroundColor = inp.value;
}


select.addEventListener('change', changeFigure);
addTask.addEventListener('click', changeColor);

