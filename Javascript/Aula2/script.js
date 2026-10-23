let tarefas = [];

function adicionarTarefa() {
    
    //O codigo abaixo realiza a captura do valor digitado
    const inputTarefa = document.getElementById("tarefaInput");
    let tarefa = inputTarefa.value.trim();

    const mensagem = document.getElementById("mensagem");
    
    //Verifica se tarefa está vazio
    if (tarefa == ""){
        //Mostra mensagem de erro
        mensagem.textContent = "Tarefa não foi digitada!"
    }else{
        
        mensagem.textContent = "Tarefa adicionada com sucesso!";

        tarefas.push(tarefa);
        renderizarTarefas();
    }

    inputTarefa.value = ""; //Limpa o campo input

}

function renderizarTarefas(){
    //Codigo para criar um novo LI no HTML
    const listaTarefas = document.getElementById("listaTarefa");
    listaTarefas.innerHTML = ""

    criarBotaoLista();
    

    for (let i = 0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i]; //Passado o valo para ser adicionado no LI
        
        let botaoRemover = document.createElement("button");
        botaoRemover.className = "remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerTarefa(i);

        let botaoEditar = document.createElement("button");
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarTarefa(i);

        novaTarefa.appendChild(botaoRemover);
        novaTarefa.appendChild(botaoEditar);
        listaTarefas.appendChild(novaTarefa); //Cria o LI
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1);
    renderizarTarefas();
}

function editarTarefa(i){
    let tarefaEditada = prompt("Edite a tarefa:");
    if (tarefaEditada.trim() !== ""){
        tarefas[i] = tarefaEditada;
        renderizarTarefas();
    }
}

function limparLista(){
    tarefas.length = 0;
    renderizarTarefas();
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"

}

function criarBotaoLista(){
    const botoes = document.getElementById("botoes");
    
    // Limpa o contêiner de botões antes de reavaliar
    botoes.innerHTML = "";

    // Cria o botão apenas se houver pelo menos uma tarefa na array
    if (tarefas.length > 0) {
        let botaoLimpar = document.createElement("button");
        botaoLimpar.className = "botao_lista";
        botaoLimpar.textContent = "Limpar tudo";
        botaoLimpar.onclick = limparLista;
        
        botoes.appendChild(botaoLimpar);
    }
}