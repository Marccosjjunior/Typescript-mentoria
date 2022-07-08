"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Advogada"] = 1] = "Advogada";
    Profissao[Profissao["M\u00E9dica"] = 2] = "M\u00E9dica";
    Profissao[Profissao["Policial"] = 3] = "Policial";
})(Profissao || (Profissao = {}));
const mulher = {
    idade: 24,
    nome: "Rafaela",
    materias: ["Inglês, Matemática, Português"]
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(mulher.materias);
