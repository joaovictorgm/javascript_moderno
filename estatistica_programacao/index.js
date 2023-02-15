const  media =  (...numbers) => {//numbers é o rest parameters que faz ter vários argumentos que quiser 
    const sum = numbers.reduce (( accumulator, count)  => accumulator + count, 0 )//reduce() soma todos os números passados e obtém a soma o segundo parâmetro é o valor inicial do accumalator que seria 0
    return sum / numbers.length

}

console.log(media(2,3,4))

