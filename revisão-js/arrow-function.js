// a rigor. a função não seria necessária, pois, usando
//recursos nativos do js, poderiamos escrever x**2 ou Math.pow(x, 2)

//características da função:
//1) tem apenas um paramêtro
//2)seu corpo tem apenas uma linha retornando apenas um valor
function quadrado(x) {
    return x * x
}

console.log(quadrado(9))

//O formato da função acima é perfeito para a conversão para arrow function,
//Que é um modo "abreviado" de escrever uma função de JS

//1) Os parênteses em torno do parâmetro foram omitidos
//2) A palavra *function*, que vinha antes do parâmetro, foi substituída
//pelo símbolo => depois parâmetro
//3) A chave está omotida
//4) A palavra-chave *return* foi omitida
//5) Uma arrow function é uma função anômima. Portanto, caso se deseje
//chamá-la posteriormente, é necessário atribuí-la a uma variável
const quadrado2 = x => x * x
console.log(quadrado(9))

//Função com mais de um parâmetro
function potencia(b, e) { //b = base, e = expoente
    return b ** e
}

console.log(potencia(2, 10))

//Arrow function equivalente
const potencia2 = (b, e) => b**e
console.log(potencia2(2, 10))

//função sem parâmetros que retorna um numero aleatório entre 1 e 60
function megasena() {
    //Math.random() ->  retorna um número aleatório entre 0 e 1
    //*60 -> Ajusta os valores de 0 até 59
    //+ 1 -> Ajusta os valores de 1 até 60
    //Math.ceil -> retira as casas decimais de um número
    return Math.ceil(Math.random()* 60 + 1)
}
console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena())



//arrow function correspondente da função acima:
let megasena2 = () => Math.ceil(Math.random()* 60 +1)

console.log(megasena2(), megasena2(), megasena2(), megasena2(), megasena2(), megasena2())

// Função com mais de uma linha no corpo
function somaVet(vet){
    let soma = 0
    for(let n of vet) soma += n //soma = soma + n
    return soma
}

console.log(somaVet([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//com mais de uma linha no corpo as chaves voltam e não é mais
//possível omitir a palavra chave *return* caso a função retonre valor
const somaVet2 = vet2 =>{
    let soma = 0
    for(let n of vet) soma += n //soma = soma + n
    return soma
}
console.log(somaVet2([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//Conclusão: arrow functions são ideais para casos em que a função possui
//apenas uma linha, embora arrow functions com multiplas linhas não sejam
//incomuns.