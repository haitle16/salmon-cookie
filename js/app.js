'use strict'
var storeHours= ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];
var allLocations = [];
var totalCookiesByHour = 0;
var totalCookiesSold = 0;
function CreateLoc(storeName, minCustHourly, maxCustHourly, avgCookiesSoldPerCust){
    this.storeName = storeName;
    this.minCustHourly = minCustHourly;
    this.maxCustHourly = maxCustHourly;
    this.avgCookiesSoldPerCust= avgCookiesSoldPerCust;
    this.randomCustHourly = [];
    this.cookiesSoldHourly= [];
    this.totalDailyCookiesSold = 0;
    allLocations.push(this);
}
CreateLoc.prototype.calcRandomCustHourly = function(){
    for (var i = 0; i < storeHours.length; i++){
        this.randomCustHourly.push(Math.floor(Math.random() * (this.maxCustHourly - this.minCustHourly+1))+this.minCustHourly);
        console.log(storeHours[i]+': '+this.randomCustHourly[i]);
    }
}
CreateLoc.prototype.calcCookiesSoldHourly = function(){
    for(var j = 0; j < storeHours.length; j++){
        this.cookiesSoldHourly.push(Math.round(this.avgCookiesSoldPerCust * this.randomCustHourly[j]));
        console.log(storeHours[j]+': '+this.cookiesSoldHourly);
    }
}
CreateLoc.prototype.calcTotalDailyCookiesSold = function(){
    for(var k = 0; k < storeHours.length; k++){
        this.totalDailyCookiesSold = this.totalDailyCookiesSold + this.cookiesSoldHourly[k];
    }
    return this.totalDailyCookiesSold;
}
function makeLocation(){
    new CreateLoc('First and Pike', 23, 65, 6.3);
    new CreateLoc('Seatac Airport', 3, 24, 1.2);
    new CreateLoc('Seattle Center', 11, 38, 3.7);
    new CreateLoc('Capitol Hill', 20, 38, 2.3);
    new CreateLoc('Alki', 2, 16, 4.6);
};
//makeLocation();
//codes above output is correct
// create a loop to print out the allLocation
//create a table 
function makeItRun(){
    makeLocation();
    for(var m = 0; m < allLocations.length; m++){
    allLocations[m].calcRandomCustHourly();
    allLocations[m].calcCookiesSoldHourly();
    allLocations[m].calcTotalDailyCookiesSold();
    }
}
makeItRun();

console.log(allLocations[0].totalDailyCookiesSold);
console.log(allLocations[0].cookiesSoldHourly);
//
function makeHeadRow(){
    var cookiesTable = document.getElementById('cookies-data');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    cookiesTable.appendChild(trEl);
    thEl.textContent = '';
    trEl.appendChild(thEl);
    for (var l = 0; l < storeHours.length; l++){
        thEl = document.createElement('th');
        thEl.textContent = storeHours[l];
        trEl.appendChild(thEl);
    }
    thEl = document.createElement('th');
    thEl.textContent = 'Daily Total';
    trEl.appendChild(thEl);
}
makeHeadRow();
function storeData(){
    for(var i = 0; i<allLocations.length; i++){
        var cookiesTable = document.getElementById('cookies-data');
        var trEl = document.createElement('tr');
        cookiesTable.appendChild(trEl);
        var tdEl = document.createElement('td');
        cookiesTable.appendChild(tdEl);
        tdEl.textContent = allLocations[i].storeName;
        for(var j = 0; j < storeHours.length+1; j++){
            tdEl = document.createElement('td');
            cookiesTable.appendChild(tdEl);
            tdEl.textContent = allLocations[i].cookiesSoldHourly[j];
            if(j===15){
                //tdEl = document.createElement('td');
                cookiesTable.appendChild(tdEl);
                tdEl.textContent = allLocations[i].totalDailyCookiesSold;
            }
        }
    }
    // var trEl = document.createElement('tr');
    // cookiesTable.appendChild(trEl);
    // var tdEl = document.createElement('td');
    // cookiesTable.appendChild(tdEl);
    // tdEl.textContent = 'Hourly Total';
    // //here
    // for(var k =0; k < storeHours.length; k++){
    //     tdEl = document.createElement('td');
    //     cookiesTable.appendChild(tdEl);
    // }
}
storeData();

function totalRow(){
    var cookiesTable = document.getElementById('cookies-data');
    var trEl = document.createElement('tr');
    cookiesTable.appendChild(trEl);
    var tdEl = document.createElement('td');
    cookiesTable.appendChild(tdEl);
    tdEl.textContent = 'Total';
    var dailyTotal = 0;
    for(var i = 0; i < storeHours.length; i++){
        var hourlyTotal = 0;
        for(var j = 0; j < allLocations.length; j++){
        hourlyTotal += allLocations[j].cookiesSoldHourly[i];
        dailyTotal += allLocations[j].cookiesSoldHourly[i];
        }
        //console.log(hourlyTotal);
        tdEl = document.createElement('td');
        cookiesTable.appendChild(tdEl);
        tdEl.textContent = hourlyTotal;
    }
    tdEl = document.createElement('td');
    cookiesTable.appendChild(tdEl);
    tdEl.textContent = dailyTotal;
    //console.log(dailyTotal);

    //HERERERERE draft calculate numbers completed
    // for(var k =0; k < storeHours.length; k++){
    //     tdEl = document.createElement('td');
    //     cookiesTable.appendChild(tdEl);
    // }
}
totalRow();






// CreateLoc.prototype.makeItRun = function(){
//     this.calcRandomCustHourly();
//     this.calcCookiesSoldHourly();
//     this.calcTotalDailyCookiesSold();
// }
// CreateLoc.makeItRun();
// }
// render: function(){
//         this.calcRandomCustHourly();
//         this.calcCookiesSoldHourly();
//         this.calcTotalDailyCookiesSold();
// }
// render();
//         var hourlyCookiesSold = document.getElementById('hourlyCookiesSold'); // ul list
//         var storeName = document.getElementById('storeName'); // h2
//         var h2Element = document.createElement('h2');
//         h2Element.textContent = this.storeName;
//         storeName.appendChild(h2Element);
//         for(var l = 0; l < storeHours.length; l++){
//             var liElement = document.createElement('li');
//             liElement.textContent = storeHours[l]+ ': '+ this.cookiesSoldHourly[l]+ ' cookies';
//             console.log(liElement);
//             hourlyCookiesSold.appendChild(liElement);
//         }
//         console.log(this.totalCookies);
//         document.write('Total Cookies Sold Today: '+ this.totalCookies);
//     }
// }
// pikeStore.render();