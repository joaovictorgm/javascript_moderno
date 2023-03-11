"use strict";

var media = function media() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  //numbers é o rest parameters que faz ter vários argumentos que quiser 
  var sum = numbers.reduce(function (accumulator, count) {
    return accumulator + count;
  }, 0); //reduce() soma todos os números passados e obtém a soma o segundo parâmetro é o valor inicial do accumalator que seria 0
  return sum / numbers.length;
};
console.log("M\xE9dia aritm\xE9tica Simples: ".concat(media(2, 3, 4)));
var mediaP = function mediaP() {
  for (var _len2 = arguments.length, numbersP = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbersP[_key2] = arguments[_key2];
  }
  // Define a função mediaP usando arrow functione rest parameters 
  var kg = numbersP.slice().reverse().reduce(function (sum, value) {
    return sum + value.value * value.weight;
  }, 0); //O método reduce() percorre duas vezes o array de valores e calcula as somas dos produtos e dos pesos, e criado uma nova cópia usando o método slice() para evitar alterações no array original. Em seguida, a função reverse() é chamada para inverter a ordem dos elementos do array, já que precisamos percorrê-lo do último elemento para o primeiro. A função reduce() é então usada para iterar sobre os elementos  do array invertido e calcular a soma dos produtos dos valores ponderados. O sum é o valor acumulado da soma, e value é o valor atual do array. Em cada iteração, o produto do valor `value.value` pelo peso `value.weight`é adicionado ao acumulador `sum`
  var kgSum = numbersP.slice().reverse().reduce(function (sum, value) {
    return sum + value.weight;
  }, 0);
  return kg / kgSum;
};
var result = mediaP({
  value: 5,
  weight: 5
}, {
  value: 5,
  weight: 5
}, {
  value: 5,
  weight: 5
});
console.log("M\xE9dia aritm\xE9tica Ponderada: ".concat(media(result)));

// Versão do professor de Média Ponderada 

var weightedAverage = function weightedAverage() {
  for (var _len3 = arguments.length, entries = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    entries[_key3] = arguments[_key3];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * weight;
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    return accum + entry.weight;
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada:".concat(weightedAverage({
  number: 9,
  weight: 3
}, {
  number: 7,
  weight: 1
}, {
  number: 10,
  weight: 1
})));
var median = function median() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var arrangedNumbers = numbers.sort(function (a, b) {
    return a - b;
  }); // aqui é criada uma constante que recebe um array com os números passados como argumentos para a função e é ordenada em ordem crescente utilizando o 'sort'. A função de comparação que é passada para o método 'sort' subtrsi o valor 'b' do valor 'a'. Isso faz com que o método ordene os números em ordem crescente
  var mid = Math.floor(arrangedNumbers.length / 2); // aqui a const mid que é o índice do número do meio do array ordenado. O const calcula usando o Math.floot que arredonda para baixo o resultado da divisão do  length do array por 2
  return arrangedNumbers.length % 2 !== 0 ? arrangedNumbers[mid] : arrangedNumbers[mid - 1] + arrangedNumbers[mid] / 2; // aqui retorna a média dos números passados . Primeiro verifica se o length do array é impar utilizando o % (módulo). Sefor ímpar retorna o número do meio que é 'mid' se for par retorna a média aritmética dos dois elementos do meio, são elementos do índice 'mid - 1'. A fórmula utilizada é '(arrangedNumbers[mid - 1] + arrangedNumbers[mid]) / 2
};

console.log(median(8, 3, 5, 1, 3));

//Versão do professor 

var median1 = function median1() {
  for (var _len5 = arguments.length, numbers = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    numbers[_key5] = arguments[_key5];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers % 2 !== 0) {
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return average(firstMedian, secondMedian);
};
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3)));
var mode = function mode() {
  for (var _len6 = arguments.length, numbers = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    numbers[_key6] = arguments[_key6];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length // essa função usa o método 'map' para criar um novo array 'quantities', que contém pares de números e quantidades. Cada par é representado por um array de duas posições, onde a primeira posição é o próprio número e a segunda posição é a quantidade de vezes que esse número aparece no arry original. Para obter a quantidade, a função usa o método 'filter' em 'numbers' para criar um novo array contendo apenas os elementos iguais ao número atual e, em seguida, retorna o comprimento desse novo array
    ];
  });

  quantities.sort(function (a, b) {
    return b[1] - a[1];
  }); //Após obter o array 'quantities, a função o ordena em ordem decrescente de acordo com a quantidade usando o método 'sort', que recebe a função de comparação que compara o segundo elemento de cada par(ou seja, a quantidade)
  return quantities[0][0]; // á função retorna o primeiro elemento do primeiro par do array     'quantities', que corresponde ao número com a maior quantidade e, portanto, à moda
};

console.log("Moda: ".concat(mode(1, 1, 99, 5, 4, 9, 4, 2, 4)));
