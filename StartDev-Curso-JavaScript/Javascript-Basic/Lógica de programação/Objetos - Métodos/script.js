
function CalcMedia(n1, n2) {

    return (n1 + n1) / 2;

}


var aluno1 = {
    nome: "Beatriz",
    notas: [10, 7],

    media: CalcMedia
}

var aluno = {
    nome: "Alexandro",
    notas: [8, 8],
    media: CalcMedia

}


console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

console.log(aluno1.nome);
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));

