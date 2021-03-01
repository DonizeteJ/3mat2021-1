function buscaSeq(vetor, valor_busca){
    //Percurso com for tradicional
    for(let i = 0; i < vetor.length; i++){
        //encontrado valor de busca, retorna-se a posição onde foi encontrado
        if(comparaNome(vetor[i], valor_busca)) return i // "===" além de comparar o valor, compara o tipo também       
    }
    //retorna -1 caso não ache nenhuma semelhança
    return -1
}

const comparaNome = (objNome, ValorBusca) => objNome.first_name === ValorBusca

import {objNomes} from './includes/vetor-obj-nomes.mjs'

console.time('Buscando ZILMAR')
console.log(buscaSeq(objNomes, 'ZILMAR', comparaNome))
console.timeEnd('Buscando ZILMAR')

console.time('Buscando KATIUSCIA')
console.log(buscaSeq(objNomes, 'KATIUSCIA',(obj, busca) => obj.first_name === busca))
console.timeEnd('Buscando KATIUSCIA')