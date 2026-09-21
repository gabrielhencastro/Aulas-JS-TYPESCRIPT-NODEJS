/*
    1 - Name of the function
    2 - Return
    3 - Dont have hoisting
*/

// 1 - NAME OF THE FUNCTION
    // FUNCTION
    function myFunction(){
        return 1 + 1;
    }

    // ARROW FUNCTION
    const myArrow = () => {
        return 1 + 1;
    }

// 2 - RETURN
    // FUNCTION
    function myFunction(){
        return 1 + 1;
    }

    // ARROW FUNCTION (Implicit return for single-line expressions)
    // return with single-line: 
    const myArrowReturn = () => "1 + 1"
    // return with multiple lines is the same as a normal function

// 3 - HOISTING
    // HOISTING IS NOT APPLIED TO ARROW FUNCTIONS
    // HOISTING WORKS WITH REGULAR FUNCTIONS (MOVE THE DECLARATION TO THE TOP OF THE CODE)

/*
    5 - Cant be invoked with New
*/

    // FUNCTION
    function newFunc() {
        return 123;
    }

    console.log(new newFunc())

    // ARROW FUNCTIONS DONT HAVE A CONSTRUCTOR, SO IT CANT BE INVOKED WITH NEW

/*
    6 - Context
    Arrow functions have a lexical "this", while the normal functions have a dynamic "this".
    
    This means that the arrow functions inherit the context from where they were declared,
    while the regular function have the context associated to the object from where it is linked when invoked.

    If it isn't bound to anything when called, will automatically default to the global context,
    which in case of  browsers is "window"
*/

const hamburgers = {
    menu: [
        {name: "cheeseburger", price: 5.3},
        {name: "onion burger", price: 7.3}
    ],

    myOrderFunc: function(select){
        // "this" inherit the hamburgers context
        return this.menu[select].name
    },

    myOrderArrowFunc: (select) => {
        // "this" wont inherit nothig, so it is going to raise an exception
        return this.menu[select].name
    },

    // AN EXAMPLE WITH TWO SCOPES, AND IT NEEDS TO BIND THE FIRST ONE
    myOrderTimeout: function () {
        setTimeout(
            function () {
                console.log(this.menu)
            }.bind(this) // bind get the other scope
        )
    },

    // With Arrow Functions, it dont need .bind(this):
    myOrderTimeoutArrow: function () {
        setTimeout(() => {
            console.log(this.menu); // Inherit "this" from myOrderTimeoutArrow
        }, 1000);
    }

}

console.log(hamburgers.myOrderFunc(1))