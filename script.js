    function enviarSolicitacao() {

    var nome = document.getElementById('nome_do_usuario').value
    var email = document.getElementById('email_do_usuario').value
    var plano = document.getElementById('plano_do_usuario').value
    var motivo = document.getElementById('motivo').value

    if (nome == '' || email == '' || plano == '' || motivo == '') {
        alert('ERRO. Preencha os dados corretamente e tente novamente...')
    } else {
        alert(`SUCESSO. Olá, ${nome}. Após a análise dos dados inseridos, vamos entrar em contato com você e enviar um convite para participar do Linker Digital!`)

        document.getElementById('nome_do_usuario').value = ''
        document.getElementById('email_do_usuario').value = ''
        document.getElementById('plano_do_usuario').value = ''
        document.getElementById('motivo').value = ''

        document.write(`Informações de cadastro: Nome: ${nome}; 
        E-mail: ${email}; 
        Plano: ${plano}; 
        Motivo para participar do Linker Digital: ${motivo}. Para voltar ao menu principal do Linker Digital, recarregue a página.`)
    }
}

    function login() {
        var usuarioNome = document.getElementById('nome_do_usuario').value
        var usuarioEmail = document.getElementById('email_do_usuario').value
        var usuarioSenha = document.getElementById('senha_do_usuario').value

        if (usuarioNome = 'Admin' && usuarioEmail == 'admin@linkerdigital.com.br' && usuarioSenha == 'linkerdigital') {
            window.location.href = 'painel.html'
        } else {
            alert('[ERRO] Usuário e/ou senha inválidos!')

            document.getElementById('nome_do_usuario').value = ''
            document.getElementById('email_do_usuario').value = ''
            document.getElementById('senha_do_usuario').value = ''
        }
    } 