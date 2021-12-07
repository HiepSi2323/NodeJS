const xlsx = require("xlsx");

// read file excel
const readExcelFile = xlsx.readFile("./master.xlsx");
const readSheetExcelFile = readExcelFile.Sheets['data'];
//console.log(readSheetExcelFile);

// convert to json
const data = xlsx.utils.sheet_to_json(readSheetExcelFile);

// convert json to 2d array
function jsonTo2D(arrayOfObj){
    let arraykeys = ['id', 'no', 'a', 'b', 'c', 'd'];
    let arrayNested = [];

    arrayOfObj.forEach(obj => {
        // array key 
        Object.keys(obj).forEach(key => arraykeys.includes(key));
        let row = new Array(arraykeys.length); // load 6 keys 
        arraykeys.forEach((col,i) => row[i] = obj[col]); // get values 
        arrayNested.push(row); 
    });

    arrayNested.unshift(arraykeys); // insert keys of obj
    return arrayNested;
}

const newArray2D = jsonTo2D(data);
console.log(newArray2D);
