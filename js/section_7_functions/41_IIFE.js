// IIFE = Immediately Ivkoked Function Expression

(function (n1, n2) {
    let result = n1 + n2
    console.log(result)
})(1,2);

((n1, n2) => {
    const res = n1 + n2
    console.log(res)
})(1,2);