var nota1 =  8.0;
var nota2 =  8.0;


var media = (nota1 + nota2) / 2;

/*if(media >= 7){

console.log("Você passou na média!");
}
else{
    (media <= 7);

    console.log("Você esta de recuperação!")
*/

var coceito = ""

if (media >=8){

    coceito = "Òtimo";

}
else if( media >= 6.5){

    coceito = "Bom";

} else{

    coceito = "Regular";
}

console.log(media);
console.log(coceito);

switch(coceito){

case "Ótimo":
    console.log("Parabéns, vc é um excelente aluno!");
    break;
case "Bom":
    console.log("Você está quase perfeito!");
    break;
case "Regular":
    console.log("Vamos estudar mais um pouco?");
    break;
default:
console.log("Houve algum erro");
break;



}


