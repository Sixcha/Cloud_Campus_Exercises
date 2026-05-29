const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
}

let button = document.getElementById("submit")
let value1 = Number(document.getElementById("first-number").value)
let value2 = Number(document.getElementById("second-number").value)
let operator = document.getElementById("operator").value
button.addEventListener("click", () => {
    calculate(value1,value2,operator)

})

calculate = function (val1, val2, sign) {
    if (sign in operators) {
        alert( val1 + sign + val2 + " = " + operators[sign](val1, val2));
    }
}

let form = document.getElementById("calculator")
let appearButton = document.getElementById("appear")
let disappearButton = document.getElementById("disappear")

appearButton.addEventListener("click", () => {
    form.hasAttribute("hidden") ? form.removeAttribute('hidden') : false
    
    // return
})

disappearButton.addEventListener("click", () => {
    !form.hasAttribute("hidden") ? form.setAttribute('hidden', true) : false

})
