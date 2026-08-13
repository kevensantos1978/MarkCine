const pesquisa = document.getElementById("pesquisa");
const filmes = document.querySelectorAll(".filme");

pesquisa.addEventListener("input", function () {

    const texto = pesquisa.value.toLowerCase();

    filmes.forEach(function (filme) {

        const titulo = filme
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (titulo.includes(texto)) {
            filme.style.display = "block";
        } else {
            filme.style.display = "none";
        }

    });

});