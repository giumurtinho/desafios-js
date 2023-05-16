const alunos = ['João', 'Ana', 'Caio', 'Lara'];
const mediasDosAlunos = [10,7,9,6];
let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice];
    }
    else {
        return "Aluno não está cadrastrado.";
    }
}

console.log(exibeNomeNota("Giullia"))