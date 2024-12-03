const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  
  console.dir(pokemon, {maxArrayLength: null})

  // console.log(game)
// Solve Exercise 3 here:
game.difficulty = {
  easy: "false",
  med: "false",
  hard: "true",
}

console.log(game)

//Solve Exercise 4 here:
game.party = [pokemon[0]] 
console.log(game)


// Solve Exercise 5 here:
game.party = [pokemon[0], pokemon[27], pokemon[2], pokemon[17]]
console.log(game)

// Solve Exercise 6 here:
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) 
    console.log((game.gyms[i].completed = true))
  else {
    console.log((game.gyms[i].completed = false))
  }
}
console.log(game)

//Solve Exercise 7 here:
game.party[0] = pokemon[24]
console.log(game)

// Solve Exercise 8 here:
for (let i = 0; i < game.party.length; i++) {
  console.log(game.party[i].name)
}

// Solve Exercise 9 here:
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true)
    console.log(pokemon[i])
}

// Solve Exercise 10 here:
game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemonObj)
}
// Call the Function
game.catchPokemon(pokemon[40]);
console.log(game)

// Solve Exercise 11 here:
game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemonObj) && game.items[1].quantity --
}
game.catchPokemon(pokemon[12])
console.log(game)

//Solve Exercise 12 here:
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6)
    ((game.gyms[i].completed = true))
}
 console.log(game)

//  Solve Exercise 13 here:
const gymTally = {
  completed : 0,
  incompleted : 0,
}
game.gymStatus = function() {
  for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].completed === true)
    (gymTally.completed += 1);
  else if (game.gyms[i].completed === false)
  (gymTally.incompleted += 1);
  }
}
game.gymStatus()
console.log(gymTally)

// Solve Exercise 14 here:
game.partyCount =function() {
  console.log(game.party.length)
}
game.partyCount()

// Solve Exercise 15 here:
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 8)
  ((game.gyms[i].completed = true))
}
// console.log(game)

//Solve Exercise 16 here:
console.log(game)









