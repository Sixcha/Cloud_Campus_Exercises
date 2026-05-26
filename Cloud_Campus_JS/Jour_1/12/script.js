//Creation des variables

let userName = prompt("Name?")
let age = Number(prompt("Age"))
let isSubscribed = prompt("Est tu inscrit? Oui ou Non?").toLowerCase()

//Declare function

function checkUser(name,age,subscribed) {
    //Creation variable pour badges futur

    let isJunior = true

    //Nom

    console.log("Bonjour " + name)

    //Controle d'age

    if (age >= 18) {
        console.log("Accès complet")
        isJunior = false
    } else if(age >= 13 ) {
        console.log("Accès junior")
    }
    else{
        console.log("Accès refusé")
        return
    }

    //Controle Inscription

    if(subscribed == "oui"){
        console.log("Un cadeau vous attend à l'entrée !")
    }

    //Controle age pour badges

    if(isJunior){
        console.log("Badge n°1 prêt" + "\n" +
        "Badge n°2 prêt")
        
    } else {
        console.log("Badge n°1 prêt" + "\n" +
        "Badge n°2 prêt" + "\n" +
        "Badge n°3 prêt")
    }
}

checkUser(userName, age, isSubscribed)