function deletaTarefa(event){
    console.log("Tarefa deletada!");
    
    let cardBody = event.target.parantNode;
    let idTarefa = cardBody.dataset.idTarefa;

    console.log(`Vou deletar tarefa de id: ${idTarefa}`);
}