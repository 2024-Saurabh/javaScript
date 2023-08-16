// Immediate Invoked Function Expressions (IIFE)

// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh') // here hitesh is which is passed to variable name

//if we have to use iife we have use ; to separate them
