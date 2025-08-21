//undefined is not equal to empty
//it is a special keyword, takes up its own memory
//you can assume it to be like a placeholder which is kept for time being until a variable is assigned some other value

//checking def and undef
console.log(a);

var a; 

console.log(a);
a=7;
if(a === undefined){
    console.log("a is undefined")
}
else{
    console.log("a is not undefined");
}

// ans is "a is undefined"

//after log statement a = 10 is given then the ans is "a is not undefined"


console.log(x); //undef
var x = 25;
console.log(x); //25
console.log(a); //uncaught refError: a is not def


