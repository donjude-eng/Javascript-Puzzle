///11. Write a program that prints a multiplication table for numbers up to 12.

function multiplication(){
    for (let i = 1; i < 12; i++){
        for (let j = 1; j < 12; j++){
            console.log(` ${j} * ${i} = ${i * j}`);
        }
        console.log("\n");
    }
}

multiplication()