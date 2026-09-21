// Função chamada ao clicar em um item
function mostrarMensagem(texto) {
    // Seleciona a área de mensagem
    const mensagemDiv = document.getElementById("mensagem");
    // Insere o texto correspondente ao mito/verdade
    mensagemDiv.textContent = texto;
}
