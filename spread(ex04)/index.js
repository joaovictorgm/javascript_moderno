const towns = ['Pronteira', 'Izlude', 'Payon','Alberta', 'Geffen']

console.log(towns)
console.log(...towns)
// pegara a cidade da primeira posição e espalhará letra por letra 
console.log(...towns[0])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({towns, townsCopy})

const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({towns, townsCopy, townsClone })

const townsObj = {...towns }

const townsObjClone = {...townsObj }

townsObjClone.test = "Test"

console.log({townsObj, townsObjClone})

