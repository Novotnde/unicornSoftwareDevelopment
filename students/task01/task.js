const firstNamesFemale = ["Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"];
const secondNamesFemale = ["Chauncey", "Houchins", "Lama", "Frasca", "Houston", "Ake", "Shankles", "Cantor", "Mizell", "Cleland", "Maltby", "Tirrell", "Cary", "Mace", "Horta", "Carlile", "Deegan", "Torrez", "Humfeld", "Helgeson"];
const firstNamesMale = ["Joe", "Alex", "Simon", "Walker", "Moses", "Tayno", "Rose", "Yahaira", "Tommy", "James", "Clorinda", "Petr", "Kayla", "Clementina", "Rene", "Rexer", "Rex", "Max", "Shirleen", "Petr"];
const secondNamesMale = ["Chauncey", "Houchins", "Lama", "Frasca", "Houston", "Ake", "Shankles", "Cantor", "Mizell", "Cleland", "Maltby", "Tirrell", "Cary", "Mace", "Horta", "Carlile", "Deegan", "Torrez", "Humfeld", "Helgeson"];

class Student {

  constructor(firstName,lastName, age, gender ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  };
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


function main(dtoIn={}) 
{ 
  if (!validationOfInput(dtoIn)) {
    console.log('validation failed');
    return;
}
  var dtoOut = [];
  for (var i = 0; i < dtoIn.count; i++) {
    var gender = getRandomGender();
    var student = new Student(getRandomName(gender),getRandomSurname(gender),getRandomBirthdate(dtoIn.minAge,  dtoIn.maxAge), gender)
    dtoOut.push(student);
    console.log(i);
  }
  return dtoOut;

}

function getRandomName(gender){

  if(gender === "Female"){
    var element = getRandom(0, firstNamesFemale.length )
    return firstNamesFemale[element];
  }else{
    var element = getRandom(0, firstNamesMale.length )
    return firstNamesMale[element];
  }
}

function getRandomSurname(gender){
  if(gender === "Female"){
    var element = getRandom(0, secondNamesFemale.length )
    return secondNamesFemale[element];
  }else{
    var element = getRandom(0, secondNamesMale.length )
    return secondNamesMale[element];
  }
}

function getRandomGender() {
  return Math.floor(Math.random() * 2) == 1 ? "Female" : "Male"
}

function getRandomBirthdate(ageMin, ageMax) {
  var endDate = new Date();
  endDate.setFullYear( endDate.getFullYear() - ageMin);

  var startDate = new Date();
  startDate.setFullYear( startDate.getFullYear() - ageMax);

  var selectedDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - endDate.getTime()));
  return selectedDate.toISOString();
}
  

function validationOfInput(dtoIn) {

  if (isNaN(dtoIn.count) ||isNaN(dtoIn.minAge) || isNaN(dtoIn.maxAge) ) {
    throw(`Enter only numeric values`);
  }
  if(dtoIn.count < 0 ){
    throw(`Enter bigger number than 0`);
  }
} 
