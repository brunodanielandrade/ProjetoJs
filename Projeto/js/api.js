<script src="js/jquery-3.6.4.min.js"></script>
<script src="js/api.js"></script>


var mensagens = [];

function inserirMensagem(mensagem) {
    mensagens.push(mensagem);
}

function validarUsuario(objLoginSenha) {
    const usuarioValido = {
        email: 'admin@admin.com',
        senha: '1234'
    };
    return objLoginSenha.email === usuarioValido.email && objLoginSenha.senha === usuarioValido.senha;
}

function obterMensagens() {
    return mensagens;
}
