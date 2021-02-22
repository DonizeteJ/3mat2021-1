//Números
let a = 10, b = 15, c = 10 //Números
console.log(a > b)
console.log(a > b)
console.log(a == c)
console.log(a != c)
console.log('-------------------------------------------')

// String
a = 'Maria'
b = 'Sebastian'
c = 'Maria'
console.log(a > b)
console.log(a > b)
console.log(a == c)
console.log(a != c)
console.log('-------------------------------------------')

//Boolean
a = true
b = false
c = true
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
console.log('-------------------------------------------')

//vetores
a = [100, 200, 300, 400, 500]
b = [10, 20, 30, 40, 50]
c = [1, 2, 3, 4, 5]
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
console.log('-------------------------------------------')

//Para comparação de vetores, maior, menor e igual não são consistentes
//CONCLUSÃO: vetores não são diretamente comparáveis entre si.

//Objetos
a = {marca: 'Volkswagen', modelo: 'Fusca', ano: 1976}
b = {marca: 'Fiat', modelo: '147', ano: 1980}
c = {marca: 'Volkswagen', modelo: 'Fusca', ano: 1976}
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

//Objetos não são diretamente comparáveis

//CONCLUSÃO GERAL: 
//dados comparáveis em JavaScript: números, strings e boolean
