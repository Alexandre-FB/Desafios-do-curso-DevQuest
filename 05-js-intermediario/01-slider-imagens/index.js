const listaImagens = document.querySelectorAll('.img')

const indexUltimaFoto = listaImagens.length - 1
const indexPrimeiraFoto = 0

const setaAvancar = document.querySelector('.seta-avancar')
const setaVoltar = document.querySelector('.seta-voltar')
const semOpacidade = (objeto) => objeto.style.opacity = '1'
const comOpacidade = (objeto) => objeto.style.opacity = '0.5'

function avancarImg () {
    listaImagens[indexAtual].style.display = 'flex'
    listaImagens[indexAtual-1].style.display = 'none'
}
function voltarImg () {
    listaImagens[indexAtual].style.display = 'flex'
    listaImagens[indexAtual+1].style.display = 'none'
}

let indexAtual = 0

setaAvancar.addEventListener('click', _ => {
    
    if (indexAtual >= indexUltimaFoto - 1) {
        indexAtual = indexUltimaFoto
        comOpacidade(setaAvancar)
        avancarImg()
        return
    } 

    indexAtual++
    avancarImg()
    semOpacidade(setaVoltar)
})

setaVoltar.addEventListener('click', _ => {

    if (indexAtual <= indexPrimeiraFoto+1) {
        indexAtual = indexPrimeiraFoto
        comOpacidade(setaVoltar)
        voltarImg()
        return
    }

    indexAtual--
    voltarImg()
    semOpacidade(setaAvancar)
    
    console.log('Index Atual: ', indexAtual)
    console.log('Index Ultima foto: ', indexUltimaFoto)
})