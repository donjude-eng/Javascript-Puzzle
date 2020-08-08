//Task 11:
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //Index  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    //Output - Print the sum of all Even Numbers.
let sum = 0;

for (i = 0; i < number.length; i = i + 1){
    //console.log(number[i]);
    if(number[i] % 2 === 0){
        sum = sum + number[i];
        console.log('Even number');
    } else {
        console.log('Odd number');
    }
}
console.log(sum);