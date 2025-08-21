//scope in js is directly related to lexical env

//scope--> where you can acces a specific variable or function in our code.

function a() {
    var b = 10;
    c();
    function c(){

    }
}
a();
console.log(b);

//TWO WAYS TO LOOK AT IT

//1. what is the scope of this variable -> this means -> where can i acces this variable b

//2. is b inside the scope -> of a function c -> that means-> can i acces this b inside c
