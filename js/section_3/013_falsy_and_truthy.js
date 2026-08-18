// Falsy = false, "0", "", Nan, undefined and null
// Truthy = All the others

if(null) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

if(!null){
    console.log('This is falsy');
} else {
    console.log('This is truthy');
}

if(1) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');  
}