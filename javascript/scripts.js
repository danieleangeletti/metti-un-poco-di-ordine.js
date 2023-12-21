/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/

const my_array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
const my_array_length = my_array.length; 

const new_array = [];

for (let i = 0; i < my_array_length; i++) {

    const biggest = max(my_array);
    new_array.push(biggest);
    my_array.splice(my_array.indexOf(biggest), 1);


}

console.log(new_array);

// FUNCTIONS

function max(array) {

    let biggest_number = array[0];

    for (let i = 0; i < array.length; i++) {

        if (array[i] > biggest_number) {
            biggest_number = array[i];
        }
    }

    return biggest_number;
}