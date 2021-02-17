//criação de um objeto vazio
let vazio1 = {}           //forma "moderna"
let vazio2 = new Object() // forma "tradicional"

let pessoa = {
    //Objetos organizam-se em pares de
    //Propriedade = Valor
    //também chamados de
    //Atríbuto = Valor
    nome: 'Orkutilson da Silva',
    dataNasc: '2009-01-29',
    sexo: 'M',
    ocupacao: 'Estudante',
    //nomes de propriedades podem ter espaços e/ou acentos
    //mas nesse caso precisam estar entre aspas
    'cidade de origem': 'Franca/SP'
}

//Acessando uma propriedade de um Objeto
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
//quando o nome da propriedade usa espaço ou acentos, é preciso o uso de colchetes
console.log(pessoa['cidade de origem'])

// A Sintaxe do colchete SEMPRE FUNCIONA
console.log(pessoa.dataNasc)    //Sintaxe de ponto
console.log(pessoa['dataNasc']) //Sintaxe de Colchete

//A sintaxe de colchete é importante também para quando o nome da propriedade está armazenada em uma variável
let prop = 'nome'
console.log(pessoa[prop])
prop = 'sexo'
console.log(pessoa[prop])
prop = 'cidade de origem'
console.log(pessoa[prop])

//forma de exibição de um objeto inteiro no console
console.log(pessoa)
console.table(pessoa)

let veiculo = {}  //O objeto inicia-se vazio
veiculo.marca = 'Volkswagen' //Nome do objeto.Propriedade = 'Valor'
veiculo.modelo = 'Variant'
veiculo.ano = 1997
veiculo['combustível'] = 'Gasolina'
veiculo.cor = 'Azul'

console.table(veiculo)
console.log('------------------------------------------------------')

//listando todas as propriedades do objeto
//Variáveis:
//prop -> a variável que vai conter os nomes das propriedades do objeto
//pessoa -> objeto do qual vamos listas as propriedades
for(let prop in pessoa){
    console.log(prop)
}
console.log('------------------------------------------------------')
for(let x in veiculo){
    console.log(x)
}

console.log('------------------------------------------------------')
//Listando propriedades e valores do objeto veiculo com for ... in
for(let atrib in veiculo){
    console.log(atrib + ' -> ' + veiculo[atrib])
}

//apagando uma propriedade do objeto: delete
delete veiculo.ano