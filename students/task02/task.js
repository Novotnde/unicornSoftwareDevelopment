//@@viewOff:const
//@@viewOff:const

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {object} output data
**/

function main(dtoIn={}) {

    validate(dtoIn);
    return getAverageClassData(dtoIn);
}

function getAverageClassData(dtoIn){

    let minBirthDate = new Date();
    let maxBirthDate = new Date();
    let totalAge = 0;
    let medianAge = [];

    let dtoOut = {
        total: 0, 
        averageAge: 0, 
        minAge: 0, 
        maxAge: 0, 
        medianAge: 0,
        ages: [],
      };

    for (var i = 0; i < dtoIn.classroom.length; i++) {

    var age = new Date(dtoIn.classroom[i].birthdate);
    if (age < minBirthDate) {
        minBirthDate = age;
        dtoOut.maxAge = getAge(age);
    }

    if (age > maxBirthDate) {
        maxBirthDate = age;
        dtoOut.minAge = getAge(age);
    }

    var currentAge = getAge(age);
    totalAge += currentAge;

    medianAge.push(currentAge);
    dtoOut.ages.push(currentAge);
}
    dtoOut.ages = dtoOut.ages.sort(function (a, b) {  return a - b;  });
    dtoOut.medianAge = getMedian(medianAge);
    dtoOut.averageAge = totalAge / dtoIn.classroom.length;
    dtoOut.total = dtoIn.classroom.length
    return dtoOut;
}

function validate(dtoIn){
if (typeof(dtoIn.classroom) == "undefined"  
    || dtoIn.classroom === null  
    || dtoIn.classroom.length === 0)
    {
        alert("Please enter your data");
    }
}

function getMedian(values) {
    values.sort(function (a, b) {
      return a - b;
    });
}

function getAge(age){
    return new Date().getFullYear() - age.getFullYear();
}


//@@viewOff:main