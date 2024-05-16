 const evenOrOdd =prompt('scegli Pari o Dispari');
const clientNumber =Number.parseInt(prompt('Scegli un numero da 1 a 5'), 10);


function computerNumberRandom(min, max){
    return random = Math.floor(Math.random()*(max-min+1)+min);
}

computerNumberRandom(1, 5)

function numbersSum(){
    let somma = clientNumber + random;
    return somma;
}
let risultato = numbersSum();

const even = 'pari';


 if (risultato % 2 == 0 && even === evenOrOdd){
     console.log('Il tuo numero:' + ' ' + clientNumber)
     console.log('Numero del computer:' + ' ' + random)
     console.log('La somma e stata:' + ' ' + risultato)
     console.log('Hai vinto!!!')
 } else{
     if (risultato % 2 == 1 && even != evenOrOdd)
     console.log('Il tuo numero:' + ' ' + clientNumber)
     console.log('Numero del computer:' + ' ' + random)
     console.log('La somma e stata:' + ' ' + risultato)
      console.log('Hai perso... riprova la prossima volta :D')

 }
 