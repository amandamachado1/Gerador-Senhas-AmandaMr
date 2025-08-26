const numeroSenha = document.querySelectorAll('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.texContent = tamanhoSenha;

const botoes = documen.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamnho;

function diminuitamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.texContent=tamanhoSenha;
}



