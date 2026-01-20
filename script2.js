const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

let firstValue = "";
let secondValue = "";
let operator = "";
let resultShown = false;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.dataset.num) {
            if (resultShown) {
                screen.value = "";
                resultShown = false;
            }
            screen.value += btn.dataset.num;
        }

        else if (btn.dataset.op) {
            firstValue = screen.value;
            operator = btn.dataset.op;
            screen.value = "";
        }

        else if (btn.dataset.type === "equal") {
            secondValue = screen.value;
            let result;

            if (operator === "+") result = Number(firstValue) + Number(secondValue);
            else if (operator === "-") result = Number(firstValue) - Number(secondValue);
            else if (operator === "*") result = Number(firstValue) * Number(secondValue);
            else if (operator === "/") result = secondValue == 0 ? "Error" : Number(firstValue) / Number(secondValue);

            screen.value = result;
            resultShown = true;
        }

        else if (btn.dataset.type === "clear") {
            screen.value = "";
            firstValue = "";
            secondValue = "";
            operator = "";
        }
    });
});
