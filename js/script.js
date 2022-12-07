/*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero. */


// 1 creo un for per una funzione ciclica che va da 1 a 100
// 2 creo una variablile per targhetizzare i e poterla sostituire con le stringhe
// 3 creo un processo di verifica per i numeri multipli di 3 e li sostituisco con la parola "FIZZ"
// 3 Faccio la stessa cosa per i multipli di 5 ma come parola uso "BUZZ"
// 5 ed al posto dei multipli di 3 è 5 aggiungo la parola "FIZZBUZZ"






for(let i = 1; i <= 100; i++){
    //console.log(i)
    let number;
    
    const cont = document.getElementById("cont")

    const element = document.createElement("div")
    
    cont.append(element)

    element.classList.add("target")
    
    if((i % 3 === 0) && (i % 5 === 0)){
        number = 'FIZZBUZZ';
        element.classList.add("multiple-5-3")
    }else if(i % 5 === 0){ 
        number = 'BUZZ'
        element.classList.add("multiple-5")
        
    }else if(i % 3 === 0){
        number = 'FIZZ'
        element.classList.add("multiple-3")
    }else{
        number = i
    }
    
    console.log(number)
    element.append(number)
};