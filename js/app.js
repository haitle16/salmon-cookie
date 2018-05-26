'use strict'
 
var storeHours= ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];

var pikeStore = {
    storeName: 'First and Pike',
    minCustHourly: 23,
    maxCustHourly: 65,
    avgCookiesSoldPerCust: 6.3,
    randomCustHourly: [],
    cookiesSoldHourly: [],
    totalCookies: 0,
    calcRandomCustHourly: function(){
        for(var i =0; i < storeHours.length; i++){
            this.randomCustHourly.push(Math.floor(Math.random() * (this.maxCustHourly - this.minCustHourly+1))+this.minCustHourly);
            console.log(this.randomCustHourly[i]);
        }
    },
    calcCookiesSoldHourly: function(){
        for(var j = 0; j < storeHours.length; j++){
            this.cookiesSoldHourly.push(Math.round(this.avgCookiesSoldPerCust * this.randomCustHourly[j]));
            console.log(this.cookiesSoldHourly);
        }
    },
    calcTotalDailyCookiesSold: function(){
        for(var k = 0; k < storeHours.length; k++){
            this.totalCookies = this.totalCookies + this.cookiesSoldHourly[k];
        }
        return this.totalCookies;
    },
    render: function(){
        this.calcRandomCustHourly();
        this.calcCookiesSoldHourly();
        this.calcTotalDailyCookiesSold();
        var hourlyCookiesSold = document.getElementById('pikeStore'); // ul list
        var storeName = document.getElementById('storeName'); // h2
        var h2Element = document.createElement('h2');
        h2Element.textContent = this.storeName;
        storeName.appendChild(h2Element);
        for(var l = 0; l < storeHours.length; l++){
            var liElement = document.createElement('li');
            liElement.textContent = storeHours[l]+ ': '+ this.cookiesSoldHourly[l]+ ' cookies';
            console.log(liElement);
            hourlyCookiesSold.appendChild(liElement);
        }
        var liElement = document.createElement('li');
        liElement.textContent = 'Total Cookies Sold Today: '+ this.totalCookies;
        hourlyCookiesSold.appendChild(liElement);
        console.log(this.totalCookies);
        
    }
}
// SeaTac Airport Store
var seatacStore = {
    storeName: 'SeaTac Airport',
    minCustHourly: 3,
    maxCustHourly: 24,
    avgCookiesSoldPerCust: 1.2,
    randomCustHourly: [],
    cookiesSoldHourly: [],
    totalCookies: 0,
    calcRandomCustHourly: function(){
        for(var i =0; i < storeHours.length; i++){
            this.randomCustHourly.push(Math.floor(Math.random() * (this.maxCustHourly - this.minCustHourly+1))+this.minCustHourly);
            console.log(this.randomCustHourly[i]);
        }
    },
    calcCookiesSoldHourly: function(){
        for(var j = 0; j < storeHours.length; j++){
            this.cookiesSoldHourly.push(Math.round(this.avgCookiesSoldPerCust * this.randomCustHourly[j]));
            console.log(this.cookiesSoldHourly);
        }
    },
    calcTotalDailyCookiesSold: function(){
        for(var k = 0; k < storeHours.length; k++){
            this.totalCookies = this.totalCookies + this.cookiesSoldHourly[k];
        }
        return this.totalCookies;
    },
    render: function(){
        this.calcRandomCustHourly();
        this.calcCookiesSoldHourly();
        this.calcTotalDailyCookiesSold();
        var hourlyCookiesSold = document.getElementById('seatacStore'); // ul list
        var storeName = document.getElementById('storeName1'); // h2
        var h2Element = document.createElement('h2');
        h2Element.textContent = this.storeName;
        storeName.appendChild(h2Element);
        for(var l = 0; l < storeHours.length; l++){
            var liElement = document.createElement('li');
            liElement.textContent = storeHours[l]+ ': '+ this.cookiesSoldHourly[l]+ ' cookies';
            console.log(liElement);
            hourlyCookiesSold.appendChild(liElement);
        }
        var liElement = document.createElement('li');
        liElement.textContent = 'Total Cookies Sold Today: '+ this.totalCookies;
        hourlyCookiesSold.appendChild(liElement);
        console.log(this.totalCookies);
    }
}
// Seattle Center Store
var seattleStore = {
    storeName: 'Seattle Center',
    minCustHourly: 11,
    maxCustHourly: 38,
    avgCookiesSoldPerCust: 3.7,
    randomCustHourly: [],
    cookiesSoldHourly: [],
    totalCookies: 0,
    calcRandomCustHourly: function(){
        for(var i =0; i < storeHours.length; i++){
            this.randomCustHourly.push(Math.floor(Math.random() * (this.maxCustHourly - this.minCustHourly+1))+this.minCustHourly);
            console.log(this.randomCustHourly[i]);
        }
    },
    calcCookiesSoldHourly: function(){
        for(var j = 0; j < storeHours.length; j++){
            this.cookiesSoldHourly.push(Math.round(this.avgCookiesSoldPerCust * this.randomCustHourly[j]));
            console.log(this.cookiesSoldHourly);
        }
    },
    calcTotalDailyCookiesSold: function(){
        for(var k = 0; k < storeHours.length; k++){
            this.totalCookies = this.totalCookies + this.cookiesSoldHourly[k];
        }
        return this.totalCookies;
    },
    render: function(){
        this.calcRandomCustHourly();
        this.calcCookiesSoldHourly();
        this.calcTotalDailyCookiesSold();
        var hourlyCookiesSold = document.getElementById('seattleStore'); // ul list
        var storeName = document.getElementById('storeName2'); // h2
        var h2Element = document.createElement('h2');
        h2Element.textContent = this.storeName;
        storeName.appendChild(h2Element);
        for(var l = 0; l < storeHours.length; l++){
            var liElement = document.createElement('li');
            liElement.textContent = storeHours[l]+ ': '+ this.cookiesSoldHourly[l]+ ' cookies';
            console.log(liElement);
            hourlyCookiesSold.appendChild(liElement);
        }
        var liElement = document.createElement('li');
        liElement.textContent = 'Total Cookies Sold Today: '+ this.totalCookies;
        hourlyCookiesSold.appendChild(liElement);
        console.log(this.totalCookies);
    }
}
// Capitol Hill Store
var capStore = {
    storeName: 'Capitol Hill Store',
    minCustHourly: 20,
    maxCustHourly: 38,
    avgCookiesSoldPerCust: 2.3,
    randomCustHourly: [],
    cookiesSoldHourly: [],
    totalCookies: 0,
    calcRandomCustHourly: function(){
        for(var i =0; i < storeHours.length; i++){
            this.randomCustHourly.push(Math.floor(Math.random() * (this.maxCustHourly - this.minCustHourly+1))+this.minCustHourly);
            console.log(this.randomCustHourly[i]);
        }
    },
    calcCookiesSoldHourly: function(){
        for(var j = 0; j < storeHours.length; j++){
            this.cookiesSoldHourly.push(Math.round(this.avgCookiesSoldPerCust * this.randomCustHourly[j]));
            console.log(this.cookiesSoldHourly);
        }
    },
    calcTotalDailyCookiesSold: function(){
        for(var k = 0; k < storeHours.length; k++){
            this.totalCookies = this.totalCookies + this.cookiesSoldHourly[k];
        }
        return this.totalCookies;
    },
    render: function(){
        this.calcRandomCustHourly();
        this.calcCookiesSoldHourly();
        this.calcTotalDailyCookiesSold();
        var hourlyCookiesSold = document.getElementById('capStore'); // ul list
        var storeName = document.getElementById('storeName3'); // h2
        var h2Element = document.createElement('h2');
        h2Element.textContent = this.storeName;
        storeName.appendChild(h2Element);
        for(var l = 0; l < storeHours.length; l++){
            var liElement = document.createElement('li');
            liElement.textContent = storeHours[l]+ ': '+ this.cookiesSoldHourly[l]+ ' cookies';
            console.log(liElement);
            hourlyCookiesSold.appendChild(liElement);
        }
        var liElement = document.createElement('li');
        liElement.textContent = 'Total Cookies Sold Today: '+ this.totalCookies;
        hourlyCookiesSold.appendChild(liElement);
        console.log(this.totalCookies);
    }
}
// Alki Store
var alkiStore = {
    storeName: 'Alki',
    minCustHourly: 2,
    maxCustHourly: 16,
    avgCookiesSoldPerCust: 4.6,
    randomCustHourly: [],
    cookiesSoldHourly: [],
    totalCookies: 0,
    calcRandomCustHourly: function(){
        for(var i =0; i < storeHours.length; i++){
            this.randomCustHourly.push(Math.floor(Math.random() * (this.maxCustHourly - this.minCustHourly+1))+this.minCustHourly);
            console.log(this.randomCustHourly[i]);
        }
    },
    calcCookiesSoldHourly: function(){
        for(var j = 0; j < storeHours.length; j++){
            this.cookiesSoldHourly.push(Math.round(this.avgCookiesSoldPerCust * this.randomCustHourly[j]));
            console.log(this.cookiesSoldHourly);
        }
    },
    calcTotalDailyCookiesSold: function(){
        for(var k = 0; k < storeHours.length; k++){
            this.totalCookies = this.totalCookies + this.cookiesSoldHourly[k];
        }
        return this.totalCookies;
    },
    render: function(){
        this.calcRandomCustHourly();
        this.calcCookiesSoldHourly();
        this.calcTotalDailyCookiesSold();
        var hourlyCookiesSold = document.getElementById('alkiStore'); // ul list
        var storeName = document.getElementById('storeName4'); // h2
        var h2Element = document.createElement('h2');
        h2Element.textContent = this.storeName;
        storeName.appendChild(h2Element);
        for(var l = 0; l < storeHours.length; l++){
            var liElement = document.createElement('li');
            liElement.textContent = storeHours[l]+ ': '+ this.cookiesSoldHourly[l]+ ' cookies';
            console.log(liElement);
            hourlyCookiesSold.appendChild(liElement);
        }
        var liElement = document.createElement('li');
        liElement.textContent = 'Total Cookies Sold Today: '+ this.totalCookies;
        hourlyCookiesSold.appendChild(liElement);
        console.log(this.totalCookies);
    }
}
pikeStore.render();

seatacStore.render();

seattleStore.render();

capStore.render();

alkiStore.render();
