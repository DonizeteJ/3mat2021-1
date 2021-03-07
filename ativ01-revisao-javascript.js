/*

   DADOS PARA O EXERCÍCIO

   nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617

*/

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

estadosNe.push(estado1)

let estado2 = {}
estado2.nome = "Alagoas"
estado2.sigla = "AL"
estado2.area = 27848.14
estado2.populacao = 3322820

estadosNe.push(estado2)

let estado3 = {}
estado3.nome = "Rio Grande do Norte"
estado3.sigla = "RN"
estado3.area = 52811.05
estado3.populacao = 3479010

estadosNe.push(estado3)

let estado4 = {}
estado4.nome = "Paraíba"
estado4.sigla = "PB"
estado4.area = 56469.78
estado4.populacao = 3996496

estadosNe.push(estado4)

let estado5 = {}
estado5.nome = "Pernambuco"
estado5.sigla = "PE"
estado5.area = 98148.32
estado5.populacao = 9496294

estadosNe.push(estado5)

let estado6 = {}
estado6.nome = "Ceará"
estado6.sigla = "CE"
estado6.area = 148920.47
estado6.populacao = 9075649

estadosNe.push(estado6)

let estado7 = {}
estado7.nome = "Piauí"
estado7.sigla = "PI"
estado7.area = 251577.74
estado7.populacao = 3264531

estadosNe.push(estado7)

let estado8 = {}
estado8.nome = "Maranhão"
estado8.sigla = "MA"
estado8.area = 331937.45
estado8.populacao = 7035055

estadosNe.push(estado8)

let estado9 = {}
estado9.nome = "Bahia"
estado9.sigla = "BA"
estado9.area = 564733.18
estado9.populacao = 14812617

estadosNe.push(estado9)
 
const densidade = (populacao, area) => populacao/area

for (let i = 0; i < estadosNe.length; i++){
    estadosNe[i].densidade = densidade(estadosNe[i].populacao, estadosNe[i].area)
    delete estadosNe[i].sigla
}

const Object4 = propri =>{
    for(i in propri){
        console.log(propri[i])
    }    
}


for(i of estadosNe){
    Object4(i)
}



let HollowVet = []

for (let i = 0; i < estadosNe.length; i++){
   n = estadosNe[i].nome
   if (i == 0) {
      HollowVet.push(n)
   }
   else if (n > HollowVet[HollowVet.length -1]) HollowVet.push(n)
   else{
      let posicao = 0
      while (posicao < HollowVet.length){
         if (n <= HollowVet[posicao]) {
            HollowVet.splice(posicao, 0, n)
            break
         }
         posicao++
      }

   } 
}

/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao HollowVetor estadosNe usando push().
*/

/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. 
*/

/*
   3) Percorra o HollowVetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/

/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/

/* 5) Percorra o HollowVetor estadosNe usando for..of. Para cada objeto no HollowVetor,
      invoque a função escrita em 4) para exibi-lo.

/*
   6)
      a) Declare um HollowVetor vazio.
      b) Insira no HollowVetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o HollowVetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.

*/