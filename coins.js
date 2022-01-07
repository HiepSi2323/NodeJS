var json2csv = require('json2csv').parse;
var fs = require('fs');
var {performance} = require('perf_hooks');
var fetch = require('cross-fetch');

async function get(){
    // let limit = prompt("Enter a number for limit, please: ");
    let url = `https://api.coinstats.app/public/v1/coins?limit=30`; 
    let start = performance.now();
    let getData = await fetch(url);
    let response = await getData.json();
    let data = JSON.parse(JSON.stringify(response));
    
    //console.timeEnd('get data from api');
    return data[Object.keys(data)[0]];
    
}


function fixData(arrayOfCoins){
	
	arrayOfCoins.forEach(coin => {
		var arrKeys = Object.keys(coin);
		arrKeys.forEach(key => {
            if(key === 'icon')
                coin[key] = coin['name'] + '.png';
			else if(Array.isArray(coin[key])){
				// coin[key] = coin[key].toString(); sai
                coin[key] = coin[key].join(', ')

			}
		});
	});
    
	return arrayOfCoins;
}

async function data(){
    //console.time('modify data follow request');
    
    let coins = await get();
    let newData = await fixData(coins);
    // console.timeEnd('modify data follow request');
    return newData;
}

async function writeCSV(){
    let dataCSV = await data();
    let arrayFields = Object.keys(dataCSV[0]);
    console.time('save CSV');
    const csv = json2csv(dataCSV, arrayFields);
    fs.writeFile('coin.csv', csv, function(err){
        if(err) console.log(err);
        console.log('done');
    });
}

writeCSV()
