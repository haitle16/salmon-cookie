'use strict'
 
var storeHours= ['06:00','07:00','08:00','09:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'];

var pikeStore = {
    min : 3,
    max : 8,
    // this is the number of cooklies average
    average: 6.1,
    randomCustomer: function(min, max){
        min = this.min;
        max = this.max;
        // use this.min this.max
        return Math.random() * (max-min) + min;
    }
    
}
// make a for loop that runs for 15 times (hours) for the random custumer generate 
// put them in an array 
//build a table for your html google

pikePlace.getRandom(pikePlace.min, pikePlace.max);
 
// property of a object that is a function is a METHOD!
