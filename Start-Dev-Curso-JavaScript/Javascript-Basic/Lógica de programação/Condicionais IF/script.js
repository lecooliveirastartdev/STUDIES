/*A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

Sintaxe:

if (condição) afirmação1 [else afirmação2]

Condição:

Uma expressão (premissa) que pode ser avaliada como verdadeira (true) ou falsa (false), veja lógica de programação para entender melhor.

Condição1:

Condicional que será executada caso a condição em if seja verdadeira (true). Pode ser qualquer instrução, incluindo mais condicionais if aninhadas à instrução. Para executar multiplas instruções, faça um agrupamento com uma instrução em bloco ({ ... }). Para não executar nenhuma instrução, utilize uma instrução vazia (empty).

Condição2:

Condicional que será executada caso a condição em if seja avaliada como falsa (false) e a condição else exista. Pode ser qualquer instrução, incluindo instruões em bloco e mais condicionais if aninhadas.

Descrição:

Múltiplas condicionais if ... else podem ser aninhados quando necessário. Observe que não existe elseif (em uma palavra). O correto é a instrução com espaços (else if), conforme abaixo:*/

/*if (condição1)
   instrução1
else if (condição2)
   instrução2
else if (condição3)
   instrução3
...
else
   instruçãoN


   //Para ver seu funcionamento, abaixo está a instrução como deveria ser caso identada corretamente.

   if (condição1)
   instrução1
else
   if (condição2)
      instrução2
   else
      if (condição3)
...

/*Para executar multiplas instruções dentro de uma condição, utilize um bloco ({ ... }) . Em geral, é sempre uma boa prática utilizar instruções dentro de blocos, especialmente em códigos que envolvam condicionais if aninhadas:

if (condição) {
   instrução1
} else {
   instrução2
}*/

/*Não confunda os valores boolean primitivos true e false com os valores true e false do objeto Boolean. Qualquer valor que não for undefined, null, 0, NaN, ou uma string vazia (""), e qualquer objeto, incluíndo um objeto Boolean cujo valor é false, é avaliado como true quando passado por uma condicional. Por exemplo:*/

var b = new Boolean(false);
if (b) // essa condição é avaliada como true

//Usando if...else

if (cipher_char === from_char) {
   result = result + to_char;
   x++;
} 
else {
   result = result + clear_char;
}

//Usando else if

/*Perceba que não existe sintaxe de elseif em JavaScript. Entretanto, você pode escrevê-la com um espaço entre o if e o else.*/

if (x > 5) {

} else if (x > 50) {

} else {

}

/*Atribuições junto de expressões condicionais
É recomendado não utilizar atribuições simples junto de uma expressão condicional, visto que atribuições podem ser confundidas com igualdade ao olhar o código. Por exemplo, não use o código abaixo:*/

if (x = y) {
   /* faça a coisa certa */
}

/*Caso você precise utilizar uma atribuição em uma expressão condicional, uma prática comum é inserir parênteses adicionais em volta da atribuição. Por exemplo:*/

if ((x = y)) {
    /* faça a coisa certa */
 }