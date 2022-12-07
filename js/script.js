/*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero. */


// 1 creo un for per una funzione ciclica che va da 1 a 100
// 2 creo una variablile per targhetizzare i e poterla sostituire con le stringhe
// 3 creo un processo di verifica per i numeri multipli di 3 e li sostituisco con la parola "FIZZ"
// 3 Faccio la stessa cosa per i multipli di 5 ma come parola uso "BUZZ"
// 4 stampo il risultato in console


//1 

for(let i = 1; i <= 100; i++){
    //console.log(i)
    let number;
    //2 

    
    if(i % 3 === 0){
        number = 'FIZZ';
    }else if(i % 5 === 0){ 
        number = 'BUZZ'
    
    }else{
        number = i
    }
    
    console.log(number)
};