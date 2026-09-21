/*
    Criei esse exercício fora do curso para praticar algumas coisas e fixar.

    1. Crie um array de produtos e uma outra array listaProdutosOrdenados
    2. Crie um array de kg e uma outra array kgOrdenado.
    3. Crie um array de preços.
    4. Crie um objeto que junte as 3 arrays
    5. Exiba com base no preço e kg, o valor final e ordene pelo mais barato ao mais caro.
*/

// Lista de produtos
let listaProdutos = ["banana", "alface", "tomate"] 
let listaProdutosOrdenadas = listaProdutos.toSorted()

// Lista de pesos
let pesoProdutosKg = [.3, .2, .5]
let pesoProdutosKgSorted = pesoProdutosKg.toSorted((a,b) => a - b)

// Preços
let precoProdutosKg = [5, 1, 4]

// Criação do objeto
let objetoProdutos = listaProdutosOrdenadas.map(
    (item, index) => ({
        nome: item,
        preco: precoProdutosKg[index],
        peso: pesoProdutosKgSorted[index]
    })
)

// Exibindo de acordo com o preço
const objetosProdutosOrdenadosPorValorTotal = objetoProdutos.toSorted(
    (a, b) => (a.preco * a.peso) - (b.preco * b.peso)
);

console.log(objetosProdutosOrdenadosPorValorTotal)