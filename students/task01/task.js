
const firstNames = ["Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"];
const secondNames = ["Chauncey", "Houchins", "Lama", "Frasca", "Houston", "Ake", "Shankles", "Cantor", "Mizell", "Cleland", "Maltby", "Tirrell", "Cary", "Mace", "Horta", "Carlile", "Deegan", "Torrez", "Humfeld", "Helgeson"];

class Student {

  constructor(firstName,lastName, age,gender ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }


}
//@@viewOff:const
//@@viewOff:const

//@@viewOn:helpers
  /**
   * Returns random number in range <min,max>
   * 
   * @param {number} min min value
   * @param {number} max max value
   * @return {number} random number
  **/
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 
//@@viewOff:helpers

//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {array} output data
**/

const getRandomNumber = (max) => Math.floor(Math.random() * max);


function main(dtoIn={count, minAge, maxAge}) { 

if (isNaN(dtoIn.count) ||isNaN(dtoIn.minAge) || isNaN(dtoIn.maxAge) ) {
    alert(`Enter only numeric values`);
} 
if(dtoIn.count < 0 ){
  alert(`Enter bigger number than 0`);
}



  console.log(getRandomName());
  console.log(getRandomSurname());
  console.log(getRandomGender());
  console.log(getRandomBirthdate(10,27))
     //@@viewOff:main
}

function getRandomName(){
  var element = getRandom(0, firstNames.length )
  return firstNames[element];
}

function getRandomSurname(){
  var element = getRandom(0, secondNames.length)
  return secondNames[element];
}

function getRandomGender() {
  return Math.floor(Math.random() * 2) == 1 ? "Female" : "Male"
}

function getRandomBirthdate(ageMin, ageMax) {
  var minAge = new Date();
  minAge.setFullYear( minAge.getFullYear() - ageMin);

  var maxAge = new Date();
  maxAge.setFullYear( maxAge.getFullYear() - ageMax);

  var studentInAgerange = new Date(maxAge.getTime() + Math.random() * (minAge.getTime() - maxAge.getTime()));
  return studentInAgerange.toDateString();
}


