function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um personagem</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLocaleLowerCase()

    let resultados = "";
    let titulo = "";
    let ladoForca = "";
    let descricao = "";

    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        ladoForca = dado.ladoforca.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || ladoForca.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                 <h2>
                      <a href="#" target="_blank">${dado.titulo}</a> 
                 </h2>
                 <p class="lado-forca">${dado.ladoforca}</p> 
                 <p class="descricao-meta">${dado.descricao}</p> 
                 <a href="${dado.link}" target="_blank">Mais informações</a> 
            </div>
        `;
        }

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados
}