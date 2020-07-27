let val = 10;
//let noOfPrints = 1;
let printOn = true;

// Modify this function to achive the output
function printVal(){

    if (printOn === true) {
        console.log(val);
        printOn = false;
    }

}


// OUTPUT:
// 10


printVal();
printVal();
printVal();
