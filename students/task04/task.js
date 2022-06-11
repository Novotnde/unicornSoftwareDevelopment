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
    if (!validate(dtoIn)) {
        console.log('validace neuspesna');
        return;
    }
   return GetData(dtoIn);

}

function validate(dtoIn) {

    if(dtoIn.classroom.length < 0){
        throw "no data"
    }
    for (var i = 0; i < dtoIn.length; i++) {
        if (dtoIn.classroom[i].gender.toLowerCase() != "male" && dtoIn.classroom[i].gender.toLowerCase() != "female") {
            throw 'wrong gender.'
        } else if (dtoIn.classroom[i].name == undefined || dtoIn.classroom[i].name == null ) {
            throw "name undefined"
        } else if (dtoIn.classroom[i].surname == undefined || dtoIn.classroom[i].surname == null ) {
            throw "surname undefined"
        }
    }
    return true;
}


function GetData(dtoIn){

    let dtoOut = {
        names: {
            all: {},
            male: {},
            female: {},
        },
        chartData: { 
            all: [],
            male: [],
            female: [],
        }
    };
    for (var i = 0; i < dtoIn.classroom.length; i++) {

         CountAllNames(dtoOut, dtoIn, i);

        if (dtoIn.classroom[i].gender.toLowerCase() == "female"){
            CountFemaleNames(dtoOut, dtoIn, i);
        }
        if (dtoIn.classroom[i].gender.toLowerCase() == "male"){
            CountMaleNames(dtoOut, dtoIn, i);
        }
    }

       for (const property in dtoOut.names.all) {
        dtoOut.chartData.all.push({
            label: `${property}`,
            value: `${dtoOut.names.all[property]}`
        });
      }

      for (const property in dtoOut.names.male) {
        dtoOut.chartData.male.push({
            label: `${property}`,
            value: `${dtoOut.names.male[property]}`
        });
      }
      
      for (const property in dtoOut.names.female) {
        dtoOut.chartData.female.push({
            label: `${property}`,
            value: `${dtoOut.names.female[property]}`
        });
      }

    return dtoOut;
}

function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
 } 

function CountAllNames(dtoOut, dtoIn, i) {
    if (dtoOut.names.all.hasOwnProperty(dtoIn.classroom[i].name)) {
        dtoOut.names.all[dtoIn.classroom[i].name]++;
      
    }
    else {
        dtoOut.names.all[dtoIn.classroom[i].name] = 1;
    }
}

function CountFemaleNames(dtoOut, dtoIn, i) {
    if (dtoOut.names.female.hasOwnProperty(dtoIn.classroom[i].name)) {
        dtoOut.names.female[dtoIn.classroom[i].name]++;
      
    }
    else {
        dtoOut.names.female[dtoIn.classroom[i].name] = 1;
    }
}

function CountMaleNames(dtoOut, dtoIn, i) {
    if (dtoOut.names.male.hasOwnProperty(dtoIn.classroom[i].name)) {
        dtoOut.names.male[dtoIn.classroom[i].name]++;
      
    }
    else {
        dtoOut.names.male[dtoIn.classroom[i].name] = 1;
    }
}

//@@viewOff:main