const  media =  (...numbers) => {//numbers é o rest parameters que faz ter vários argumentos que quiser 
    const sum = numbers.reduce (( accumulator, count)  => accumulator + count, 0 )//reduce() soma todos os números passados e obtém a soma o segundo parâmetro é o valor inicial do accumalator que seria 0
    return sum / numbers.length

}

console.log(`Média aritmética Simples: ${media(2,3,4)}`)

const mediaP = (...numbersP) =>{ // Define a função mediaP usando arrow functione rest parameters 
    const kg = numbersP.slice().reverse().reduce((sum, value) => sum + value.value * value.weight, 0) //O método reduce() percorre duas vezes o array de valores e calcula as somas dos produtos e dos pesos, e criado uma nova cópia usando o método slice() para evitar alterações no array original. Em seguida, a função reverse() é chamada para inverter a ordem dos elementos do array, já que precisamos percorrê-lo do último elemento para o primeiro. A função reduce() é então usada para iterar sobre os elementos  do array invertido e calcular a soma dos produtos dos valores ponderados. O sum é o valor acumulado da soma, e value é o valor atual do array. Em cada iteração, o produto do valor `value.value` pelo peso `value.weight`é adicionado ao acumulador `sum`
    const kgSum = numbersP.slice().reverse().reduce((sum, value) => sum + value.weight,0)
    return kg / kgSum
}

const result= mediaP(
    { value: 5, weight: 5},
    {value: 5, weight: 5},
    {value: 5, weight: 5}
    );
console.log(`Média aritmética Ponderada: ${media(result)}`)

// Versão do professor de Média Ponderada 

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum,{ number, weight}) => accum + (number * weight), 0 )
    const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0)
    return sum / weightSum
}

console.log(`Média Ponderada:${weightedAverage(
    {number: 9, weight: 3},
    { number: 7, weight: 1},
    { number: 10, weight: 1},
)}`)

const  median = (...numbers) =>{
    const arrangedNumbers = numbers.sort((a,b) => a - b)// aqui é criada uma constante que recebe um array com os números passados como argumentos para a função e é ordenada em ordem crescente utilizando o 'sort'. A função de comparação que é passada para o método 'sort' subtrsi o valor 'b' do valor 'a'. Isso faz com que o método ordene os números em ordem crescente
    const mid = Math.floor(arrangedNumbers.length / 2)// aqui a const mid que é o índice do número do meio do array ordenado. O const calcula usando o Math.floot que arredonda para baixo o resultado da divisão do  length do array por 2
    return arrangedNumbers.length % 2 !== 0 ? arrangedNumbers [mid] : arrangedNumbers[mid - 1] + arrangedNumbers[mid] / 2// aqui retorna a média dos números passados . Primeiro verifica se o length do array é impar utilizando o % (módulo). Sefor ímpar retorna o número do meio que é 'mid' se for par retorna a média aritmética dos dois elementos do meio, são elementos do índice 'mid - 1'. A fórmula utilizada é '(arrangedNumbers[mid - 1] + arrangedNumbers[mid]) / 2
}
console.log(median(8, 3 , 5 , 1, 3))

//Versão do professor 

const median1 = (...numbers) => {
    const orderedNumbers =  
}


