.body {
    display: flex;
    align-items: center;
    justificar-conteúdo : centro ;
    altura : 100vh 
function retornarValores(conteudo){
    if (!("erro" in conteudo)) {
        document.getElementById('endereco').value = (conteudo.logradouro)
        document.getElementById('bairro').value = (conteudo.bairro)
        document.getElementById('cidade').value = (conteudo.localidade)
        document.getElementById('cep').value = (conteudo.cep)
    }else{
        alert("CEP não encontrado")
    }
}

function buscaCep (valor) {
    var cep = valor.replace(/\D/g, '')
    if(cep != ""){
        var validarCEP = /^[0-9]{8}$/
        if(validarCEP.test(cep)){
            document.getElementById('endereco').value = "..."
            var script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornarValores`

            document.body.appendChild(script)
        }else{
            alert("formato invalido")
        }
    }

}
