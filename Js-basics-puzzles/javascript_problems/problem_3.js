//Enter 2 strings and do the following operations
//concatenate / reverse / reverse concat / mix the letters / split in half /
//remove all white spaces / add a character after every specific letter /

// let str1 = "Don Jude ";
// let str2 = "Sarath Babu";

//concatenate Strings
// function concatStrings(){
//     let con;
//     con = str1 + str2;
//     return con;
// }
//console.log(concatStrings());

//Reverse string operation;
// function reverseString(){
//     for (let i = str1.length -1; i >= 0; i --){
//         console.log(str1[i]);
//     }
// }
// console.log(reverseString());

//Reverse Concat
function reverseConcat(str1, str2) {
    let rev1 = "";
    let rev2 = "";

    for (let i = str1.length - 1; i >= 0; i--) {
        rev1 += str1[i];
    }
    for (let j = str2.length - 1; j >= 0; j--) {
        rev2 += str2[j];
    }

    let revConcat = rev1 + rev2;
    return revConcat;
}

//console.log(reverseConcat("Don", "Jude"));

//Mix letters
// function mixLetters(str1, str2) {
//     let mixString = [];
//     let mix1 = str1.split('');
//     let mix2 = str2.split('');
//     // console.log(mix1, mix2);

//     for (let i = 0; i < ((mix1.length + mix2.length) / 2); i++) {
//         mixString.push(mix1[i]);
//         mixString.push(mix2[i])

//     }
//     console.log(mixString);
//     console.log(mixString.join(''));


// }

// mixLetters("Don", "jude");
function mixLetters(str1, str2) {
    let result = [];
    let length = str1.length > str2.length ? str1.length : str2.length;
    for (let i = 0; i < length; i++) {
        result.push(str1[i]);
        result.push(str2[i]);

    }
    console.log(result.join(''));
}

mixLetters("Don", "Jude");