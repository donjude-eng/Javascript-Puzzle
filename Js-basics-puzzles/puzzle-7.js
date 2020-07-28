let val = 15;
//let noOfPrints = 1;
let printOn = true;

// Modify this function to achive the output
function printVal(){

    if (printOn === true) {
        console.log(val);
        printOn = false;
    } else {
        console.log('Entry is wrong')
    }

}


// OUTPUT:
// 10


printVal();
printVal();
printVal();
