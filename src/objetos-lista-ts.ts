enum Profissao {
    Professora,
    Advogada,
    Médica,
    Policial
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const mulher: Estudante = {
    idade: 24,
    nome: "Rafaela",
    materias: ["Inglês, Matemática, Português"]
  
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log ("- ", item);
    }
}

listar(mulher.materias);