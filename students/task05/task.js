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

    if (!validateInput(dtoIn)) {
        console.log('validace neuspesna');
        return;
    }

    let dtoOut = [
        {
          name: "...", // jméno
          surname: "...", // přijmení
          gender: "...", // pohlaví, hodnota male | female
          age: 0 // věk
        }
      ];


    let currentDate = new Date();
    for (let i = 0; i < dtoIn. classroom.length; i++) {
        let birthdate = new Date(dtoIn.classroom[i].birthdate);
        if(birthdate.getMonth() == currentDate.getMonth())
        {
            dtoOut.push(dtoIn.classroom[i]);
        }
    }

    return dtoOut;
}

function validateInput(dtoIn) {

    if(dtoIn.classroom.length < 0){
        throw "no data"
    }
    for (let i = 0; i < dtoIn.length; i++) {
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

//@@viewOff:main