'use strict';

const restaurant = {

    name : "Classico Italiano",
    location : "Via Angelo Tavanti 23, Firenze, Italy" ,
    categories : ["Italian", "Pizzeria", "Vegetarian","Organic"],
    startMenu :["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
    mainMenu : ["Pizza", "Pasta", "Risotto"], 
    order : function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex],this.mainMenu[mainIndex]];
    }
};


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






