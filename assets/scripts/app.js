const defaultResult = 0;
let currentResult = defaultResult;

// gets input from input field
function getUserNumberInput(){
    return parseInt(userInput.value)
}

// Generates and writes calculation log
function createAndWriteOutput(operator , resultBeforeCalc , calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber} `;
    outputResult(currentResult , calcDescription); // from vendor file
}


function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += parseInt(userInput.value);
    createAndWriteOutput('+' , initialResult , enteredNumber)
}

function substract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= parseInt(userInput.value);
    createAndWriteOutput('-' , initialResult , enteredNumber)
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= parseInt(userInput.value);
    createAndWriteOutput('*' , initialResult , enteredNumber)
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= parseInt(userInput.value);
    createAndWriteOutput('/' , initialResult , enteredNumber)
}


addBtn.addEventListener('click' , add);
subtractBtn.addEventListener('click' , substract );
multiplyBtn.addEventListener('click' , multiply);
divideBtn.addEventListener('click' , divide);


function  add(){
    add() = 1 +1
}