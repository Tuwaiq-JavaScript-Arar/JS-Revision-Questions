console.log("Hello World!");

/*1- Write a function named totalCharacters that takes
 in an array of strings  and returns the number of
  characters in the array.
*/
const totalCharacters = (arr) => {
  // Solution code here...
};

totalCharacters(["abc","yz"]) // => 5

/* 2- Write a function named getCourseKeys
 that takes any object,
  and returns an array containing
   the keys for that object.
    For example:.
*/
const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};

const getCourseKeys = (obj) => {
  // Solution code here...
};

getCourseKeys(courseInfo)// => ['name', 'duration', 'topics', 'finalExam']

/*3- Write a function reversString that accepts
 a string and returns the string reversed.
*/
const reversString = function (string) {
  // TODO: Your code here
};

reversString("Hello"); // => "olleH"
reversString("John"); // => "nhoJ"
