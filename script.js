const buttons = document.querySelectorAll('button')
console.log(buttons);
const screen = document.querySelector('.screen')
let calculation = []
let Acc_calculation;
const clearButton = document.getElementById('Clear');


function calculate(button) {
    let value = button.textContent; 

    if (button == clearButton) {
        calculation = [];
        screen.textContent = '';
    }
    else if (value === '=') {
        screen.textContent = eval(Acc_calculation)
    }
    else {
        calculation.push(value);
        Acc_calculation = calculation.join('')
        screen.textContent = Acc_calculation
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))