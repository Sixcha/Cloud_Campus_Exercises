let age = prompt("Age?")
let adult = false
let international = false

function checkAdult(age) {
    if(age >=18){
        if(age >=21){
            console.log("Hey ! Vous êtes majeur ! (Internationale!)")
            return
        }
        console.log("Hey ! Vous êtes majeur !")
        return
    }
    console.log("Vous êtes mineur")
    return
}

checkAdult(age)