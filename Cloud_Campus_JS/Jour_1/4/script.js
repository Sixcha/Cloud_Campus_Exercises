userAge = [
    34 , 16 ,18
]

function checkAge(age) {
    if (age >= 18) {
        console.log("Accès autorisé") 
    } else {
        console.log("Accès refusé") 
    }
}

for (let i = 0; i < userAge.length; i++) {
    checkAge(userAge[i])
    
}