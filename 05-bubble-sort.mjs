let totTrocas, comps, passadas

function BubbleSort (vetor){
    totTrocas = 0, comps = 0, passadas = 0
    let trocas
    do{
        trocas = 0 //inicio de uma nova passada
        passadas++
        //Percuso do vetor do inicio ao fim até o Penultimo elemento
        for(let i = 0; i <= vetor.length - 2; i++){
            if(vetor[i] > vetor[i + 1]){
                //troca direta em javascript usando desestruturação de valores
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
            }
            comps++
        }
        totTrocas += trocas
    }while(trocas > 0)
}

//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

//Pior Caso:
let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

console.log('Antes:', nums)
BubbleSort(nums)
console.log('Depois:', nums)
console.log({totTrocas, comps, passadas})

import {empresas} from './includes/15-mil-empresas.mjs'

console.log('Antes:', empresas)
BubbleSort(empresas)
console.log('Depois:', empresas)
console.log({totTrocas, comps, passadas})

