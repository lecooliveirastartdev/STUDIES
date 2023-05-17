//Exemplo de criar objeto 1

var a = {
    nome: "Alexandro",
    sobrenome: "Oliveira"

}
console.log(a);

//Exemplo de criar objeto 2

function obj(nome, sobrenome)
{ return{ nome: nome, sobrenome: sobrenome}
    

}
console.log(this.nome, + this.sobrenome);