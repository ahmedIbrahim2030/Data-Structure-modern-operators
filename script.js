'use strict';


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
        [weekdays[3]] : {
            open : 12,
            close :22
        },
        [weekdays[4]]:{
            open : 11,
            close : 23 ,
        },
       [weekdays[5]]: {
            open : 0, //open 24 hour
            close : 24
        },
    };

    




const restaurant = {

    name : "Classico Italiano",
    location : "Via Angelo Tavanti 23, Firenze, Italy" ,
    categories : ["Italian", "Pizzeria", "Vegetarian","Organic"],
    startMenu :["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
    mainMenu : ["Pizza", "Pasta", "Risotto"], 
    orderDelivery:  function({starterIndex, mainIndex, time, address}) {
        console.log(`Order recieved! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
        
    },
    //ES6 enhanced object literals
    openingHours,
    order(starterIndex, mainIndex) {
        return [this.startMenu[starterIndex],this.mainMenu[mainIndex]];
    } ,
    orderPasta (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredents,...otherIngredents){
        console.log(mainIngredents);
        console.log(otherIngredents);
        
    }
};

//Iterate Map
const question = new Map([
    ['question', "What is the best programming language in the wor;d"], 
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again']
]);


console.log(question);


//Convert Object to map
console.log(Object.entries(openingHours));

const hourMap = new Map(Object.entries(openingHours));

console.log(hourMap);

console.log(question.get('question'));

for(const [key, value] of question) {

if (typeof key ==='number') {
        console.log(`Answer ${key} : ${value}`);
    
}    
}
const answer = 3;

// const answer = Number(prompt("Your answer"));

console.log(answer);

console.log( question.get(question.get("correct") === answer));

console.log(...question);


// console.log([...question.entries()]);

console.log([...question]);


console.log([...question.keys()]);

console.log([...question.values()]);



////////////////////////////
/*

//Maps : DS that Map values into keys

const rest = new Map();

rest.set('name', 'Classico Italiano');

rest.set(1, 'Firenze Italy')

console.log(rest.set(2, 'Lisbon, Portgual'));

rest.set('categories',['Italian','Pizzeria', 'Vegetarian', "Organic",])
.set('open',11)
.set('close',23)
.set(true, "We are open :D")
.set(false, "We are Closed :(")

console.log(rest.get('name'));

console.log(rest.get(true));

console.log(rest.get(1));

const time = 8;

console.log(rest.get(time > rest.get('open' && time < rest.get('close'))));

console.log(rest.has("categories"));

rest.delete(2);

const arr = [1,2]

rest.set(arr,"Test");

rest.set(document.querySelector('h1',"Heading"));

console.log(rest);


// rest.clear();


console.log(rest.size);

console.log(rest.get(arr));

*/



/*

//New Operators to make Set Usefull 
const italianFoods = new Set([
  "Pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

//order doesn't matter
const commonFoods = italianFoods.intersection(mexicanFoods);

console.log('Intersection: ', commonFoods);

console.log([...commonFoods]);

const italianMexcainFusion = italianFoods.union(mexicanFoods);

console.log('Union: ',italianMexcainFusion);

console.log(... new Set([...italianFoods, ...mexicanFoods]));


const uniqueItalianFoods = italianFoods.difference(mexicanFoods);

console.log('Difference Intalian : ',uniqueItalianFoods );

const uniqureMexcainFoods = mexicanFoods.difference(italianFoods);

console.log(`Difference mexican`,uniqureMexcainFoods);

const uniqueItalianMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);

console.log(uniqueItalianMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));

*/



////////////////////////////////////
/*

//Sets : Collection of unique values without any dublicates
const orderSet = new Set(
    [
        'pasta',
        'Pizza',
        'Pizza',
        'Rissoto',
        'pasta',
        'Pizza'
    ]
);



console.log(orderSet);

console.log(new Set("Ahmed"));

console.log(orderSet.size);

console.log(orderSet.has("Pizza"));

console.log(orderSet.has("Bread"));

orderSet.add("Garlic Bread");

orderSet.delete('Risotto');
// orderSet.clear();

console.log(orderSet);

//Sets are not indexes

for(const order of orderSet) console.log(order);

//Example

const staff = ['Waiter', 'Chef', 'Waiter', "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)];

console.log(staffUnique);

console.log(new Set("Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter").size);

console.log(new Set("Ahmed").size);



*/


/*

//Property NAMES

const properties = Object.keys(openingHours);

console.log(properties);



let openStr = `We are open on ${properties.length} days : `;


for(const day of properties){
    openStr +=` ${day}`;
    
}
console.log(openStr);

//Property values

const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);

console.log(entries);

//[key, value]
for(const [key, {open, close }] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
    
}

*/

/*

if (restaurant.hours && restaurant.hours.mon) {
    console.log(restaurant.hours.mon.open);
}

//without undefined
// console.log(restaurant.openingHours.mon.open);


//with optional chaining

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for(const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'Closed';
    console.log(`On ${day}, we open at ${open}`);
};

//Methods 

console.log(restaurant.order?? 'Method does not exist');

console.log(restaurant.orderRissoto?.(0, 1)??"Method does not exist");


//Arrays

const users = [
    {
        name : "Ahmed",
        email : 'hello@ahmed.io',}
];

const user = [];

console.log(users[0].name ?? 'User array empty');

if (users.length > 0) {
    console.log(users[0].name);
    
}else console.log('user array empty');

*/


/*
//for-of loop

const menu = [...restaurant.startMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for(const [i, el] of menu.entries()){
    console.log(`${i+ 1} : ${el}`);  
};




// console.log(...menu.entries());

*/


/*
const rest1 = {
    name : "Capri",
    numGuests : 0
};

const rest2 = {
    name : "La Piazza",
    owner : "Giovane Rossi"
};



// OR-assignement operator
// rest1.numbGuests = rest1.numGuests || 10;
// rest2.numbGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||=10;


// nullish-assignement operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;



// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= "<ANONYMOUS>";


console.log(rest1);
console.log(rest2);

*/



/*

//nullish  : null and undefined (not 0 or '')

 restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10 ;

console.log(guestCorrect);



const guest = restaurant.numGuests || 10;

console.log(guest);





*/









/*
console.log('---------OR--------');



// Use ANY data Type , retrun any data type, short-circuting
console.log(3 || 'Ahmed');
console.log('' || 'ahmed');
console.log(true || 0);
console.log(undefined || null);

//Hello: because it's first truthy value
console.log(undefined || 0 || ''|| 'Hello' || 23 ||null);


restaurant.numGuests = 0;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

const guest2 = restaurant.numGuests || 10;

console.log(guest2);


console.log('--------AND--------');

console.log(0 && 'Ahmed');
console.log(7 && 'Ahmed');

console.log('Hello' && 23 && null && "Ahmed");


if (restaurant.orderPizza) {
    restaurant.orderPizza("masrooms", "Spinach");
};

restaurant.orderPizza && restaurant.orderPizza("mashrooms", "spinach");

*/



/*

//Spread Operators : is Unpacked an array into elements
//Rest Operator : is Packed elements into an array


//SPREAD, because on RIGHT of =
const arr = [1,2,...[3,4]];


//Rest, because on LEFT side of =
const [a , b ,...others ] = [1,2,3,4,5]

console.log(a, b, others);

const [pizza, risotto,...otherFood ] = [...restaurant.mainMenu, ...restaurant.startMenu]  

//pizza : array, rissito : array, 
console.log(pizza, risotto, otherFood);


//Objects
const {sat, ...weekDays} = restaurant.openingHours;

console.log(weekDays);

//2) functions

const add = function(...numbers){

    let sum = 0;
    for (let index = 0; index <numbers.length; index++) {
        sum += numbers[index];
    }
    console.log(sum);
};

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x =[23,5,7];

add(...x);


restaurant.orderPizza('Mashroms','onion','olives','spinach')

restaurant.orderPizza('mashroms');





*/



///////////////////////////////////////////
// const arr =  [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// console.log(badNewArr);


//Spread Operator

// const newArr = [1,2,...arr];

// console.log(newArr);


// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// console.log(newMenu);

// //Copy array

// const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
// const menu = [...restaurant.startMenu,...restaurant.mainMenu];

// console.log(menu);

//itirables : arrays, maps,String , sets ,but not objects

// const str = 'Ahmed';

// const letters = [...str, ' ', 'S.'];

// console.log(letters);

// console.log(...str);

// console.log(`${...str} Ibrahim`);

//realWorlds examples

// const ingredents = [
//   prompt("lets make pasta! Ingredents !?"),
//   prompt("Ingredents 2?"),
//   prompt("Ingredents 3?"),
// ];

// console.log(ingredents);

// restaurant.orderPasta(ingredents[0],ingredents[1],ingredents[2]);

// restaurant.orderPasta(...ingredents);


//Objects


// const newRestaurant = {foundIn : 1998,...restaurant, founder:"Guisappe"};

// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};

// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);



///////////////////////////////////////////////
/*

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

*/



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

// const obj1 = {
//   time: "22:30",
//   address: "via del sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// }; 


// console.log("Hi");

// restaurant.orderDelivery({
//     starterIndex: 2,
//     mainIndex: 2,
//     time: "22:30",
//     address: "via del sole, 21",
// });


// restaurant.orderDelivery({
//   address: "via del sole, 21",
//   starterIndex: 1,
// });







