//Enter a number and find if it's prime
//Primr numbers are numbers that are divisible by 2 or more numbers.
//Eg-- 2 , 3, 5 , 7, 11, 13, 17, 19, 23

function primeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primeNumber(3));

