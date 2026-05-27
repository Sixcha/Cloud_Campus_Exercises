// === Exercice 1 - Télécommande de lampe ===
// TODO:
// 1. Cibler le bouton et l'ampoule
//    - Utiliser document.querySelector() pour sélectionner les éléments
//    - Stocker les références dans des variables
// 2. Ajouter un écouteur d'événement sur le bouton
//    - Utiliser addEventListener() avec l'événement 'click'
// 3. Au clic, basculer la classe 'on' sur l'ampoule
//    - Utiliser classList.toggle() pour ajouter/retirer la classe

// === Exercice 2 - Afficheur de mot mystère ===
// TODO:
// 1. Cibler l'input, le bouton et le paragraphe de résultat
// 2. Ajouter un écouteur d'événement sur le bouton
// 3. Au clic, récupérer la valeur de l'input et l'afficher dans le paragraphe

// === Exercice 3 - Simulateur d'humeur ===
// TODO:
// 1. Cibler les boutons et la zone d'affichage
// 2. Ajouter des écouteurs d'événements sur chaque bouton
// 3. Au clic, modifier le texte selon l'humeur sélectionnée

// === Exercice 4 - Contrôle de volume ===

// === Exercice 5 - Nom d'utilisateur en direct ===

let lightSwitch = document.getElementsByClassName("switch-btn")
let lightBulb = document.getElementsByClassName("light-bulb")
lightSwitch[0].addEventListener("click", () => {
    lightBulb[0].classList.toggle("on")
})

let revealButton = document.getElementsByClassName("revealer")[0]
let passwordElement = document.getElementsByClassName("secretPassword")[0]
let passwordInput = document.getElementsByClassName("secret")[0]
revealButton.addEventListener("click", () => {
    // console.log(passwordElement.innerHTML)
    // console.log(passwordInput.value)
    passwordElement.innerHTML = passwordInput.value
})

let happyButton = document.getElementsByClassName("happy")[0]
let sadButton = document.getElementsByClassName("sad")[0]
let angryButton = document.getElementsByClassName("angry")[0]
let emotionText = document.getElementsByClassName("emotion")[0]
let emotionButtons = [happyButton,sadButton,angryButton]
for (const button of emotionButtons) {
    button.addEventListener("click", () => {
        emotionText.innerHTML = `You are ${button.className} today.`
        // console.log(button)
    })
}

let volumeInput = document.getElementById("volume")
let volumeText = document.getElementsByClassName("currentVolume")[0]
document.addEventListener("DOMContentLoaded", () => {
    volumeText.innerHTML = `${volumeInput.value}%`
})
volumeInput.addEventListener("input", () => {
    volumeText.innerHTML = `${volumeInput.value}%`
})

let userName = document.getElementsByClassName("user-name")[0]
let realTimeUserName = document.getElementsByClassName("realtime-username")[0]
userName.addEventListener("keyup", () => {
    realTimeUserName.innerHTML = `Hello, ${userName.value}!`
})