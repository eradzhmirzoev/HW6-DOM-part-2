let figure = document.querySelector('.section__show > div');
let select = document.querySelector('.select');
let inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');

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
btn.addEventListener('click', changeColor);

