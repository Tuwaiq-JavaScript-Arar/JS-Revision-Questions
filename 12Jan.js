/*1- Write a function that will take an array of objects representing developers, 
Each developer object has a key called language that can be 
Python OR Ruby OR JS. It should return true if the number of developers 
who know the same language is maximum 2 and false otherwise.  
*/

const isDiverse = (sentence, i) => {
  // Solution code here...
};
isDiverse([
  { name: "Hijji", language: "JS" },
  { name: "Najah", language: "JS" },
  { name: "Raghad", language: "Python" },
  { name: "Oudah", language: "Ruby" },
]); // => true
isDiverse([
  { name: "Ibtesam", language: "Python" },
  { name: "Rawan", language: "JS" },
  { name: "Othman", language: "Python" },
  { name: "Saleh", language: "JS" },
  { name: "Maryam", language: "JS" },
]); // => false

/* 2. Write a function that takes two parameters:
a.  An array of objects that represent the winners, where each object 
contains two keys, team and country,
B. the country 
the function should return the number of times a given country has won. Return 0 if there have been no wins. 
*/

const winningCount = (winnerArr, country) => {
  // Solution code here...
};

winningCount(
  [
    { team: "team0", country: "Germany" },
    { team: "team1", country: "Spain" },
    { team: "team2", country: "England" },
    { team: "team1", country: "Spain" },
    { season: "team3", country: "Spain" },
  ],
  "Spain"
); // => 3
