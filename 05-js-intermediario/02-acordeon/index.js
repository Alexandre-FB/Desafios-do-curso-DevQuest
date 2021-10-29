const perguntas = document.querySelectorAll('.item-toggle')

perguntas.forEach(item => {
    item.addEventListener('click', () => {

        const estaEscondido = item.classList.contains('esconder')

        perguntas.forEach(item => {
            item.classList.add('esconder')
        })

        if (estaEscondido) {
            item.classList.remove('esconder')
        }
    })
})
