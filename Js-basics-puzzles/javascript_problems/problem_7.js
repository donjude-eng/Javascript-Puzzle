//7. Multiple each element of an array with a constant and print the result?

let elem = [10, 12, 14, 16, 18, 20, 22, 24];

function multipleOfAnArray(number){
    for(let i = 0; i < elem.length; i++){
        elem[i] = elem[i] * number;
        console.log(elem);
    }
}

multipleOfAnArray(3);
