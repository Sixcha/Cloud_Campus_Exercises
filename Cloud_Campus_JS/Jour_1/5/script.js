temperatures = [
    25 , 18 , 10, 9
]

function checkTemp(temp) {

    if (temp >= 25) {
        console.log("Il fait chaud" + "(" + temp + ")")
    } else if (temp >= 18) {
        console.log("Il fait bon" + "(" + temp + ")")
    } else if (temp >= 10) {
        console.log("Il fait frais" + "(" + temp + ")")
    }else {
        console.log("Il fait froid" + "(" + temp + ")")
    }

}

