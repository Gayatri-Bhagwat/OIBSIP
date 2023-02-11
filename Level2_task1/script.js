
let buttons = document.querySelectorAll('button');
let inputArea = document.querySelector('input');
let clearInput = document.querySelector('.Clear');
let heading = document.querySelector('.heading');
let icon = document.querySelector('i');
let numbers = document.querySelectorAll('.num');
let symbol = document.querySelectorAll('.spc-btn');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let value = e.target.innerText;
        if (e.target.innerText != '=') {

            inputArea.value += value;
        }
    })

    clearInput.addEventListener('click', function () {
        inputArea.value = " ";
    })
})

function change(x) {

    x.classList.toggle("fa-toggle-on");
    document.querySelector('.container').classList.toggle('container-new');
    document.querySelector('.Clear').classList.toggle('new-button');
    numbers.forEach(function (number) {
        number.classList.toggle('font-new');
    })
    symbol.forEach(function (sym) {
        sym.classList.toggle('new-button');
    })
}

const ans = function () {
    let ans = eval(inputArea.value);
    inputArea.value = ans;

}
document.querySelector('.Equal').addEventListener('click', function () {
    if (inputArea.value == 'undefined') {
        alert('Calculate Something!');
        inputArea.value = " ";
    }
})




