let perguntas = document.querySelectorAll('.item-toggle')

perguntas.forEach(item => {
    item.addEventListener('click', () => {

        let estaEscondido = item.classList.contains('esconder')

          perguntas.forEach(item => {
            item.classList.add('esconder')
        })
        
        if (estaEscondido == true) {
            item.classList.remove('esconder')
        } else {
            item.classList.add('esconder')
        }       
    })
})
  