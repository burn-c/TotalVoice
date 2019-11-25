const readlineSync = require("readline-sync");
const  totalvoice=  require("totalvoice-node");

const client = new totalvoice("81b488b24c3958bb17616a607889cfec");

const opcoes = ["Infor TTS", "Enviar TTS"];
const index = readlineSync.keyInSelect(opcoes, 'Qual a ação desejada ?');

if(index == 1) {
    const number = readlineSync.question('Enviar TTS para qual numero? ');
    const menssage = readlineSync.question('Qual será ação necessaria? ');

    client.tts.enviar(number, menssage)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
}

else if(index ==0) {
    const ttsId = readlineSync.question('Qual é o Id do TTS para pesquisa? ');

    client.tts.buscar(ttsId)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

}