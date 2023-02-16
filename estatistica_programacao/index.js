const  media =  (...numbers) => {//numbers é o rest parameters que faz ter vários argumentos que quiser 
    const sum = numbers.reduce (( accumulator, count)  => accumulator + count, 0 )//reduce() soma todos os números passados e obtém a soma o segundo parâmetro é o valor inicial do accumalator que seria 0
    return sum / numbers.length

}

console.log(media(2,3,4))

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
console.log(result)