//Everything in js happens inside an execution context

const { captureOwnerStack } = require("react");

//execution context created in two phases
//1. creation phase or memory phase
//2. code execution phase

var n =2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);

//CallStack
//callstack maintains the order of execution of execution context

//callstack known as-
//0. callstack
//1. execution context stack
//2. program stack
//3. control stack
//4. runtime stack
//5. machine stack
