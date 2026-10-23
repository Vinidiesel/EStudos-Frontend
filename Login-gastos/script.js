let calculo = '';
const display = document.getElementById('display');

function adicionar(digito){
    if(calculo.length < 15){
        calculo = calculo + digito;
        mostraTela(calculo);
    }else{
        resultado();
    }
    
}

function mostraTela(valor){
    display.value = valor;
}

function resultado(){
    try {
        let expressao = calculo.replace(/X/g, '*');
        calculo = eval(expressao).toString();
        if (calculo == Infinity){
            display.value = "Erro";
        }else{
            mostraTela(calculo);
        }

    } catch (error) {
        display.value = 'Erro';
        calculo = '';
    }
}

function apagarTudo(){
    calculo = "";
    mostraTela(calculo);
}

function apagarUltimo(){
    if (display.value == "Erro"){
        apagarTudo();
    }else{
        calculo = calculo.slice(0,-1);
        mostraTela(calculo);
    }
}