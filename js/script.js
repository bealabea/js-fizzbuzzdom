// creo un ciclo for per stampare in console log i numeri dall'1 al 100
for (let i = 1; i <=100; i++) {
    /*console.log(i)*/

//MILESTONE 1:
    if (i % 3 === 0 && i % 5 === 0) {  //Se i miei numeri sono multipli sia di 3 che di 5 stampa in console log FizzBuzz
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {  //altrimenti se sono multipli solo di 3 stampa in console log Fizz
        console.log('Fizz');
    } else if (i % 5 === 0) {  //altrimenti se sono multipli solo di 5 stampa in console log Buzz
        console.log('Buzz');
    } else {
        console.log(i);  //altrimenti stampa in console log i numeri in successione
    }
}

//MILESTONE 2:

// creo una costante per il mio container html
const containerHtml = document.querySelector('.container-boxes');
// ripropongo il ciclo for ma questa volta per stampare nel DOM
for (let i = 1; i <=100; i++) {
    /*ae i miei numeri sono multipli sia di 3 che di 5,
    attraverso l'aggiunta di un elemento Html stampa FizzBuzz*/
    if (i % 3 === 0 && i % 5 === 0) {  
        containerHtml.innerHTML += `<div class="box box-fizzbuzz">FizzBuzz</div>`;
    /*altrimenti se i miei numeri sono multipli solo di 3,
    attraverso l'aggiunta di un elemento Html stampa Fizz*/
    } else if (i % 3 === 0) {  
        containerHtml.innerHTML += `<div class="box box-fizz">Fizz</div>`;
    /*altrimenti se i miei numeri sono multipli solo di 5,
    attraverso l'aggiunta di un elemento Html stampa Buzz*/
    } else if (i % 5 === 0) {  
        containerHtml.innerHTML += `<div class="box box-buzz">Buzz</div>`;
    //altrimenti stampa i numeri in successione
    } else {
        containerHtml.innerHTML += `<div class="box">${i}</div>`; 
    }
}


// MILESTONE 3: aggiungo css e attribuisco le classi nel codice js


