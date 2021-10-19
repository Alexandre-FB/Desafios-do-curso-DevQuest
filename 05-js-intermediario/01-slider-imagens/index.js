const imagens = document.querySelectorAll('.img')
const indexUltimaFoto = imagens.length - 1
const indexPrimeiraFoto = 0

const setaAvancar = document.querySelector('.seta-avancar')
const setaVoltar = document.querySelector('.seta-voltar')
const semOpacidade = (seta) => seta.style.opacity = '1'
const comOpacidade = (seta) => seta.style.opacity = '0.5'

let indexAtual = 0

setaAvancar.addEventListener('click', function(){
    if (indexAtual < indexUltimaFoto) {
        indexAtual++
        imagens[indexAtual].style.display = 'flex'
        imagens[indexAtual-1].style.display = 'none'
        semOpacidade(setaVoltar)
    } if (indexAtual >= indexUltimaFoto) {
        indexAtual = indexUltimaFoto 
        comOpacidade(setaAvancar)
    }
})

setaVoltar.addEventListener('click', function(){
    if (indexAtual > indexPrimeiraFoto) {
        indexAtual --
        imagens[indexAtual].style.display = 'flex'
        imagens[indexAtual+1].style.display = 'none'
        semOpacidade(setaAvancar)
    } 
    if (indexAtual <= 0) {
        indexAtual = 0
        comOpacidade(setaVoltar)
    } 
})

