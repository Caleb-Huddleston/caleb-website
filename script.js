const display = document.getElementById('display');
let plusOrMinus;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        plusOrMinus = Math.floor(Math.random() * 2);

        if(plusOrMinus === 0) {
            display.value = eval(display.value) + Math.floor(Math.random() * 3);
        }
        else {
            display.value = eval(display.value) - Math.floor(Math.random() * 3);
        }
    }
    catch(error) {
        display.value = "Error";
    }
}
   