const dayjs = require("dayjs") //importa o módulo dayjs

function calculateAge(birthDate){// Define a função que recebe a data de nascimento como parâmetro
    const today = dayjs()//cria uma instância do objeto dayjs para a data atual
    const birthDay = dayjs(birthDate) //cria uma instância do objeto dayjs para a data de nascimento, passando o formato esperado

    const age = today.diff(birthDay, 'year')//Calcula a idade da pessoa em anos, subtraindo a data de nascimento da data atual
    //diff calcular a diferença entre duas datas em um intervalo de tempo 
    const nextBirthday = birthDay.add(age + 1, 'year')//Calcula a data do próximo aniversário, subtraindo a data atual da data do próximo aniversário
    const daysUntilBirthday = nextBirthday.diff(today, 'day')// Calcula o tanto de dias para o próximo aniversário
    console.log(`Idade: ${age} anos`)//Exibe a idade da pessoa
    console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)//Exibe a data do próximo aniversário formatada como string
    console.log(`Dias até completar ${age + 1} anos: ${daysUntilBirthday}`)//Exibe quantos dias faltam para o próximo aniversário 

}

calculateAge("1998-11-13")