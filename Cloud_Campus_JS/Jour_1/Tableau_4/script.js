const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  //Le premier est par defaut pour ne pas avoir d'erreurs

  let mostRented = books[0]
  let leastRented = books[0]

  console.log(books)

  for (let i = 0; i < books.length; i++) {
    if (books[i].rented === 0) {
        console.log("Au moins un livre n'a pas ete emprunté")
        break
    }
    console.log("Tout les livre ont ete emprunté")

}

  for (let i = 0; i < books.length; i++) {

    if (books[i].rented>mostRented.rented){
        mostRented = books[i]
        console.log(mostRented)
    }

    if (books[i].rented<leastRented.rented){
        leastRented = books[i]
        console.log(leastRented)
    }

    if (books[i].id === 873495){
        console.log(books[i].title + " est le livre recherche")
    }
    
  }

  bookToRemove = books.find((e) => e.id===133712)
  indexOfBook = books.indexOf(bookToRemove)
  books.splice(indexOfBook,1)
  console.log(books)

//   if (books[i].id === 133712){
//     books.splice(books[i],1)

// }