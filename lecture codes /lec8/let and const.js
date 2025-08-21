//let and const declarations are hoisted
//this are in temporal deadzone in the time being

//let in js
console.log(b); //undef
console.log(a); //ref error cant access'a' b4 initialisation
let a =10;
//let a = 100; syntax error; duplicates not allowed
console.log(a);

//var in js
var b = 20;
var b = 200; //but in case of var duplicates are allowed
console.log(b);

//const in js
let i; //can be initialize later in let
const c = 100;
c = 10; //error; cant change the value of const 
//const d;
//d = 1000; initializing later will directly throw error
i = 5;
console.log(i);

//u cannot access let and const before u declare some value in them

//when this 'let' variable was hosited and till it is initialised value, the time b/w them is temporal dead zone

console.log(a);

//let a= 10; temporal dead zone
var b = 100;

//whenever you try to access a variable inside a temporal deadzone it gives a ref error

//const is more strict than let

let f = 1900;
const b = 1000; //type error; it should be initialise and declared together 
b = 10000; //type error
f = 10;
console.log(f);



