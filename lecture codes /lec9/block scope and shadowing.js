//what is block in js
//block is also known as compound statement

//block is used to combine multiple js statement in a group

//we group multiple statements together in a block -->
//so that we can use it where js expects one statement

//block
if(true){
    //compound statement
    var a = 10;
    console.log(a);
    
}

//what is block scope
//what all variable and functions we can access inside this block

//block scope
{
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x);
    console.log(y);
    console.log(z);
}
console.log(x); //can access outside block ; in a global space

//console.log(y); ref error due to block scope; cant access outside the block

//console.log(z);


//shadowing in js
var a = 100; //this is shadowed by the variable a present in block
{
    var a = 10; //here it shadows a = 100
    let b = 20;
    const c = 30;

    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(a); //10


var x = 100;//This variable is shadowed by the x varioable present in the block
let y = 200;
const z = 300;
{
    var x = 10;//It shadows the variable x outside the block
    let y = 20;
    const z = 30;
    console.log(x);
    console.log(y);
    console.log(z);
}
console.log(x);
console.log(y);//It will print the y variable present outside the block
console.log(z);//It will print the z variable present outside the block

//Shadowing for function
var o = 10;
function q() {
    var o = 25;
    console.log(window.o);//Inside block scope o variable 
    window.o = 20;
}
q();
console.log(o);//Outside block scope o variable 

//Illegal shadowing
// let w=200;
var w = 12;  // but we can shadow var using let
{
    // var w=20;//you cannot shadow let using var 
    let w = 20;// But you can shadow let using let
    console.log(w);
}
console.log(w);


