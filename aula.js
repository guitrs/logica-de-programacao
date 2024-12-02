// 1. O usuário vai encostar o bilhete na catraca (definir um valor para o bilhete)
// 2. A catraca vai verificar SE trm saldo no bilhete
// 3. SENÃO tiver saldo no bilhete, mostrar uma mensagem de "saldo insuficiente"

let bilhete = 10;

//SEW o bilhete tiver pelo menos (ou seja, se o valr do bilhete for maior ou igual a) 4 reais,
// execute a código abaixo
if (bilhete >=4){
    //Retirar 4 reais do bilhete
    bilhete -= 4;
    // Mostrar o saldo atual do bilhete do usuário
    console.log("Seu saldo atual é: R$" + bilhete);
    // Liberar a catraca
    console.log("Catraca liberada!");


} else {
    console.log ("Saldo insuficiente");
}