'use strict';

const restaurant = {

    name : "Classico Italiano",
    location : "Via Angelo Tavanti 23, Firenze, Italy" ,
    categories : ["Italian", "Pizzeria", "Vegetarian","Organic"],
    startMenu :["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
    mainMenu : ["Pizza", "Pasta", "Risotto"], 
      openingHours : {
        thu : {
            open : 12,
            close :22
        },
        fri:{
            open : 11,
            close : 23 ,
        },
        sat : {
            open : 0,
            close : 24
        },
    },
    orderDelivery:  function({starterIndex, mainIndex, time, address}) {
        console.log(`Order recieved! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
        
    }
    ,
    order : function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex],this.mainMenu[mainIndex]];
    } ,
  
};

restaurant.orderDelivery({
    starterIndex:1 ,
    mainIndex :0,
})



//Destructring Objects 


//oreder of elements doens not matter
const {name ,openingHours, categories} =restaurant;

console.log(name, openingHours, categories);

const {name:restaurantName, openingHours:hours, categories:tags } =
restaurant;

console.log(restaurantName, hours,tags);


//Default values
const {menu = [],startMenu: starters = []} = restaurant;

console.log(menu, starters);

//Mutating variables


let a = 111;
let b =999;
const obj = {a:23 ,b:7 , c:14};

({a,b} = obj);

console.log(a,b );

//nested Objects

const {fri:{open : o, close: c}} = openingHours;

console.log(o,c );


/*

///////////////////////////
//Destrucuring Arrays

const arr = [2, 4, 8 ];

const [x, y, z] =arr;

console.log(x, y, z);

console.log(arr);



let [main, ,secondry] = restaurant.categories;

console.log(main, secondry);



//Switching  variables

// const temp = main;
// main = secondry;
// secondry = temp;


// console.log(main, secondry);



console.log(secondry, main);


[main, secondry]  =  [secondry, main];

console.log(main, secondry);




const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter , mainCourse);

//nested destucuring

const nested = [2, 4, [5,6]];

// const [i, ,j] = nested; 
// 
// console.log(i,j);

const [i,  ,[j, k]] = nested;

console.log(i, j, k);


//Default values
const [p =1 , q = 1, r =1 ] =   [8, 9];

console.log(p, q, r);


*/

const obj1 = {
  time: "22:30",
  address: "via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
}; 


console.log("Hi");

restaurant.orderDelivery({
    starterIndex: 2,
    mainIndex: 2,
    time: "22:30",
    address: "via del sole, 21",
});


// restaurant.orderDelivery({
//   address: "via del sole, 21",
//   starterIndex: 1,
// });




