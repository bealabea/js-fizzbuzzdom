// creo un ciclo for per stampare in console log i numeri dall'1 al 100
for (let i = 1; i <=100; i++) {
    /*console.log(i)*/

//MILESTONE 1:
    if (i % 3 === 0 && i % 5 === 0) {  //Se i miei numeri sono multipli sia di 3 che di 5 stampa in console log FizzBuzz
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {  //altrimenti se sono multipli solo di 3 stampa in console log Fizz
        console.log('Fizz')
    } else if (i % 5 === 0) {  //altrimenti se sono multipli solo di 5 stampa in console log Buzz
        console.log('Buzz')
    } else {
        console.log(i)  //altrimenti stampa in console log i numeri in successione
    }
}





