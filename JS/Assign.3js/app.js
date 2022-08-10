const p = document.querySelector('p');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');



// p.style.color = 'green';
// increase.style.color = 'red'


let value = 0;

function increment (){
    value += 1;
    p.textContent = value;
    p.style.color = 'green';
}

increase.addEventListener('click', increment);

function decrement (){
    value -= 1;
    p.textContent = value;
    p.style.color = 'red';
}

decrease.addEventListener('click', decrement);

function restart (){
    value = 0;
    p.textContent = value;
    p.style.color = 'white';
}

reset.addEventListener('click', restart);