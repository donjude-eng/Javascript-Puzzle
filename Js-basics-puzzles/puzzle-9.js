//Task 9:
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //Index  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    //Output = 3 ,6 ,9

for (i = 0; i < number.length; i = i + 1) {
    //console.log(number[i]);

    //let x = number[i] % 3;
    //console.log('Reminder' , x);

    if (number[i] % 3 === 0) {
        console.log(number[i], 'Divisible by three')
    } else {
        console.log(number[i], 'Not divisible')
    }

}