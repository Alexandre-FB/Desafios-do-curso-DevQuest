        const button = document.querySelector('.btn')     
       
        const campoNome = document.querySelector('#nome')
        const msgNomeObrigatorio = document.querySelector ('.nome-obrigatorio')

        const campoEmail = document.querySelector('#email')
        const msgEmailObrigatorio = document.querySelector ('.email-obrigatorio')

        const campoTelefone = document.querySelector('#telefone')
        const msgTelefoneObrigatorio = document.querySelector ('.telefone-obrigatorio')
        
        const campoMensagem = document.querySelector('#mensagem')
        const msgMensagemObrigatorio = document.querySelector ('.mensagem-obrigatorio')
            
        const nomeVerificado = _ => {
            if (campoNome.value != '') {
                msgNomeObrigatorio.innerHTML = ''
                campoNome.classList.add('campo-correto')         
            } else {
                msgNomeObrigatorio.innerHTML = 'campo obrigatorio'
                campoNome.classList.remove('campo-correto')
                campoNome.classList.add('campo-vazio')
            }
        } 

        const emailVerificado = _ => {
            if (campoEmail.value != '') {
                msgEmailObrigatorio.innerHTML = ''
                campoEmail.classList.add('campo-correto')         
            } else {
                msgEmailObrigatorio.innerHTML = 'campo obrigatorio'
                campoEmail.classList.remove('campo-correto')
                campoEmail.classList.add('campo-vazio')
            }
        } 

        const telefoneVerificado = _ => {
            if (campoTelefone.value != '') {
                msgTelefoneObrigatorio.innerHTML = ''
                campoTelefone.classList.add('campo-correto')         
            } else {
                msgTelefoneObrigatorio.innerHTML = 'campo obrigatorio'
                campoTelefone.classList.remove('campo-correto')
                campoTelefone.classList.add('campo-vazio')
            }
        } 

        const mensagemVerificada = _ => {
            if (campoMensagem.value != '') {
                msgMensagemObrigatorio.innerHTML = ''
                campoMensagem.classList.add('campo-correto')         
            } else {
                msgMensagemObrigatorio.innerHTML = 'campo obrigatorio'
                campoMensagem.classList.remove('campo-correto')
                campoMensagem.classList.add('campo-vazio')
            }
        } 

        campoNome.addEventListener('keyup', _ => {nomeVerificado()})
        campoEmail.addEventListener('keyup', _ => {emailVerificado()})
        campoTelefone.addEventListener('keyup', _ => {telefoneVerificado()})
        campoMensagem.addEventListener('keyup', _ => {mensagemVerificada()})
       
        button.addEventListener('click', (event) => {
            event.preventDefault()
            nomeVerificado()
            emailVerificado()
            telefoneVerificado()
            mensagemVerificada()
        })
    


