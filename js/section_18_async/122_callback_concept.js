/*
O conceito de callbacks está relacionado à programação assíncrona,
onde certas operações podem levar tempo para serem concluídas,
como chamadas de API, manipulação de arquivos ou consltas a bancos de dados.

Em vez de esperar que essas operações sejam concluídas antes de continuar
a execução do código, os callbacks permitem que o código continue a ser
executado, e quando a operação assíncrona é finalizada, o callback é chamado 
para lidar com o resultado
*/

// setInterval(() => {
//     console.log("Passou 3s")
// }, 3000)


const myCallbackMultiplier = (func, multiplier, listArgs) => {
    const multipliedArgs = listArgs.map(element => element * multiplier)
    return func(...multipliedArgs)
}

const returnSum = (n1, n2) => {
    return n1 + n2
}

console.log(myCallbackMultiplier(returnSum, 2, [1, 2]))