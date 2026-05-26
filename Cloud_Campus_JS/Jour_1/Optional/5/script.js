let numberToCheck = Number(prompt("Number?"))
let sortingType = prompt("Pair ou Impair?").toLowerCase()

function check(numberToCheck, type){
    for (let i = 0; i < numberToCheck+1; i++) {
        if (type = 'pair') {
            if (i % 2 === 0){
                console.log(i)
            }
        }
        if (type = 'impair') {
            if (!i % 2 && i !== 0){
                console.log(i)
            }
        }
        
    }
}

check(numberToCheck, sortingType)