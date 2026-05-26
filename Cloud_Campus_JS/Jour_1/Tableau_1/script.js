let dogs = ['Akita Inu', 'Bouvier bernois', 'Beagle'];
const dog = {
    Name: String,
    Country : String
}
dogs.push("Golden Retriever")
dogs.push("Shiba Inu")

dogsObject = []

for (let i = 0; i < dogs.length; i++) {
    const currentDog = Object.create(dog)
    currentDog.Name = dogs[i]
    dogsObject.push(currentDog)
}
for (let i = 0; i < dogsObject.length; i++) {
    let races = ["Japon","Suisse","Angleterre","Ecosse","Japon"]
    dogsObject[i].Country = races[i]
    
}
console.log(dogsObject)