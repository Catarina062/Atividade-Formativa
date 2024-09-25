
// Atividade 1
function validarDados() {
    //Validando dados
    let data = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let mail = frmRegistro.inMail.value;
    let prod = frmRegistro.inProd.value;
    let qtd = frmRegistro.inQtd.value;
    let valor = frmRegistro.inVal.value;
    //Função para validar os dados
    if (data.trim() == '') {
        frmRegistro.inData.focus();
        MensagemErro.style.display = 'block';
        MensagemErro.innerText = 'O campo "Data" precisa ser preenchido';
        return false;
       }
       if (nome.trim() == '' || nome.trim().length < 5) {
        frmRegistro.inCli.focus();
        MensagemErro.style.display = 'block';
        MensagemErro.innerText = 'O campo "Nome" precisa ser preenchido';
        return false;
       }
       if (telefone.trim() == '' || telefone.trim().length < 5) {
        frmRegistro.inFone.focus();
        MensagemErro.style.display = 'block';
        MensagemErro.innerText = 'O campo "Telefone" precisa ser preenchido e ele não pode ter números menor que 0';
        return false;
       }
       if (mail.trim() == '' || mail.trim().length < 5) {
        frmRegistro.inMail.focus();
        MensagemErro.style.display = 'block';
        MensagemErro.innerText = 'O campo "E-Mail" precisa ser preenchido';
        return false;
       }
       if (prod.trim() == '' || prod.trim().length < 5) {
        frmRegistro.inProd.focus();
        MensagemErro.style.display = 'block';
        MensagemErro.innerText = 'O campo "Produto" precisa ser preenchido';
        return false;
       }
       if (qtd.trim() == '' || qtd.trim() <= 0) {
        frmRegistro.inQtd.focus();
        MensagemErro.style.display = 'block';
        MensagemErro.innerText = 'O campo "Quantidade" precisa ser preenchido ou não pode ser um número negativo';
        return false;
       }
       if (valor.trim() == '' || valor.trim() <= 0) {
        frmRegistro.inVal.focus();
        MensagemErro.style.display = 'block';
        MensagemErro.innerText = 'O campo "Valor" precisa ser preenchido ou não pode ser um número negativo';
        return false;
       }
       else {
        MensagemErro.style.display = 'none';
        MensagemErro.innerText;
       }
}

//Atividade 2






















//Atividade 3
//Função para ascender e apagar a lâmpada
function alterarLampada() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);
    let btnEnviar = document.getElementById("btnEnviar");
    //Função para trocar a imagem
    if (arquivo === 'acesa.jpg') {
        imagem.src = 'img/apagada.jpg';
        btnEnviar.textContent = 'Acender'; 
    } else {
        imagem.src = 'img/acesa.jpg';
        btnEnviar.textContent = 'Apagar'; 
    }
}
 
//Atividade 4

