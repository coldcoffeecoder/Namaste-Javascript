var a = 10;
function b(){
    var x = 10;
}

console.log(window.a); //10
console.log(a);  //10  //automatically assumes that we are reffering about the one at global space
console.log(this.a); //10 
console.log(x); //undef //it is inside the function 

//Window=> actually a global object which is created along with the global execution context

//whenever JS program runs --> a global obj is created
//and --> a GEC is created --> along with it a 'this' is created

//a global obj-> in case of browsers is known as window

//a global level or base level in gec -> this===window > true

//global space-> anything which is not inside any function is in global space






