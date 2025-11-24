const cardContainer = document.querySelector('.card-container');
const campoBusca = document.getElementById('busca');
let dados = [];

// Carrega os dados do JSON e renderiza todos os cards inicialmente.
document.addEventListener('DOMContentLoaded', async () => {
    const resposta = await fetch('data.json');
    dados = await resposta.json();
    renderizarCards(dados);
});

function iniciarBusca() {
    const termoBusca = campoBusca.value.toLowerCase();
    const dadosFiltrados = dados.filter(dado => {
        return dado.nome.toLowerCase().includes(termoBusca) || 
               dado.descricao.toLowerCase().includes(termoBusca);
    });
    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    // Limpa os cards existentes antes de renderizar novos
    cardContainer.innerHTML = '';

    for (let dado of dados) {
        const article = document.createElement("article");
        article.classList.add('card');
        article.innerHTML = `
        <img src="${dado.imagem}">
        <div class="card-content">
            <h2>${dado.nome}</h2>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
        </div>
        `;
        cardContainer.appendChild(article);
    }
}
