const listaImagens = document.querySelectorAll('.img')
const indexUltimaFoto = listaImagens.length - 1
const indexPrimeiraFoto = 0

const setaAvancar = document.querySelector('.seta-avancar')
const setaVoltar = document.querySelector('.seta-voltar')
const semOpacidade = (seta) => seta.style.opacity = '1'
const comOpacidade = (seta) => seta.style.opacity = '0.5'

let indexAtual = 0

setaAvancar.addEventListener('click', _ => {
    
    // Primeira Versão

    // if (indexAtual < indexUltimaFoto) {
    //     indexAtual++
    //     listaImagens[indexAtual].style.display = 'flex'
    //     listaImagens[indexAtual-1].style.display = 'none'
    //     semOpacidade(setaVoltar)
    // } if (indexAtual >= indexUltimaFoto) {
    //     indexAtual = indexUltimaFoto 
    //     comOpacidade(setaAvancar)
    // } ------------

    // Versão corrigida

    if (indexAtual === indexUltimaFoto) {
        comOpacidade(setaAvancar)
        return
    }

    indexAtual++
    listaImagens[indexAtual].style.display = 'flex'
    listaImagens[indexAtual-1].style.display = 'none'
    semOpacidade(setaVoltar)

    console.log('Index Atual: ', indexAtual)
    console.log('Index Ultima foto: ', indexUltimaFoto)
})

setaVoltar.addEventListener('click', function(){

       // Primeira Versão
    // if (indexAtual > indexPrimeiraFoto) {
    //     indexAtual --
    //     listaImagens[indexAtual].style.display = 'flex'
    //     listaImagens[indexAtual+1].style.display = 'none'
    //     semOpacidade(setaAvancar)
    // } 
    // if (indexAtual <= 0) {
    //     indexAtual = 0
    //     comOpacidade(setaVoltar)
    // } 

    // if (indexAtual <= 0) {
    //         indexAtual = 0
    //         comOpacidade(setaVoltar)
    //     } 

    // if (indexAtual === 0) {
    //     indexAtual = 0
    //     comOpacidade(setaVoltar)
    //     return
    // }

      // Versão corrigida

    if (indexAtual === 0) {
        indexAtual = 0
        comOpacidade(setaVoltar)
        return
    }

    indexAtual--
    listaImagens[indexAtual].style.display = 'flex'
    listaImagens[indexAtual+1].style.display = 'none'
    semOpacidade(setaAvancar)
    
    
    console.log('Index Atual: ', indexAtual)
    console.log('Index Ultima foto: ', indexUltimaFoto)
})

