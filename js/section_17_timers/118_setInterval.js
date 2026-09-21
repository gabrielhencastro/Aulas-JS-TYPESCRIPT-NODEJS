let secondsPassed = 0

const myInterval = setInterval(() => {
    secondsPassed++
    console.log(secondsPassed)
}, 1000)

setTimeout(() => {
    clearInterval(myInterval)
    console.log("End")    
}, 6000)

console.log("5 seconds timer")