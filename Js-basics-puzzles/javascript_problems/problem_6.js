//6 - Find the sum of elements in a given array. Array should be an input to the program

let arr = [10, 12, 14, 25, 35, 45, 15, 10];

function sumOfArray(number){
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        sum = sum + number[i];
        //console.log(number[i]);
    }
    return sum

}

let result = sumOfArray(arr);
console.log(result);