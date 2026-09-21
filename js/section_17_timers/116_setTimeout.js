const myTimeout = setTimeout(() => {
    console.log("Timer has ended")
}, 1000)

console.log("Begging")
clearTimeout(myTimeout)