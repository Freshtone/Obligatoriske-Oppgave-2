// controller
function barChooser(numberOfBars) {

    if (selectedBar == numberOfBars) {
        disabledButton = true;
        selectedBar = 'Ingen'
    } else {
        selectedBar = numberOfBars;
        disabledButton = false;
    }
    show();
}

function addBar() {

    if (inputValue < 1 || inputValue > 10) {
        barValueWarning = "Value must be between 1 and 10";
    } else {
        numbers.push(parseInt(inputValue));
    }
    show();
}

//let inputValue = document.getElementById("value");
function editBar() {
    if (inputValue == 0 || inputValue > 10) {
        barValueWarning = "Value must be between 1 and 10"
    } else { 
        numbers[parseInt(selectedBar) - 1] = parseInt(inputValue); 
    }
    show();
}

function removeBar() {

    numbers.splice(parseInt(selectedBar) - 1, 1)
    show();
}