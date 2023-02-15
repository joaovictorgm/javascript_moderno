/*const a = 0 //false quando fazer uma operação lógica

const b = null

const c = "Teste" //true porque contém conteúdo

// se a variável for verdadeira ele dará um "curto circuito" e retornará a opção verdadeira
console.log(a || b || c)
//retorna Teste

console.log(a ?? b ?? c)
//retorna "0" porque não é nulo e nem undefined
//Se estivesse apenas  o "b" e o "c" retornaria apenas o "c"*/

let a = 0
//aqui ele atrubuiu que o valor de "a" é falso
let b = a || 42

console.log({ a, b})
//se "á" não tiver nenhum conteudo ira retornar "42"
b = a ?? 42

console.log({a, b})

//com isso e possivel deixar um valor padrão quando for undefined