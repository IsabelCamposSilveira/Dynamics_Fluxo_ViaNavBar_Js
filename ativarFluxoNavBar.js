// Botão no form irá chamar essa função, atualizar a conta e ativar fluxo automatizado
function ChamarFluxo(id) {

    debugger;

    // Pegar as variaveis enviadas pelo botão, Ribbon
    var entityID = id[0];

    // Busca o registo da entidade Conta pelo ID
    Xrm.WebApi.retrieveRecord("account", entityID, "?$select=ics_dataativacaodofluxo")
    .then(
        function success(result) {
            // Alterar o registro recuperado
            result.ics_dataativacaodofluxo = (Date.now()).toString(); // Para sempre alterar ao clicar pois a data sempre muda

            // Atualizar o registro 
            Xrm.WebApi.updateRecord("account", entityID, result)
            .then(
                function success() {
                    alert("Fluxo ativado com sucesso");
                    // Aqui você pode realizar outras ações após a atualização, se necessário.
                },
                function error(error) {
                    console.error("Erro: " + error.message);
                }
            );

        },
        function error(error) {
            console.error("Erro na chamada da Web API: " + error.message);
        }
    );

}