let display = document.querySelector("#screen");
let calcButton = document.querySelector("#calculate");
let calcClear = document.querySelector("#clear");
let inputNumber = document.querySelectorAll(".number");
let inputOperation = document.querySelectorAll(".operation");

let displayValue = '';
var a = 0;
var b = 0;
let operation = '';

function operate() {

}


const onClickAdd = calcButton.addEventListener("click", handler)


const onEnter = display.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handler();
    }
}
)

const onClear = calcClear.addEventListener("click", () =>{
    displayValue = '';
    display.textContent = 'CLEAR';
    console.log("CLEAR");
})



function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}