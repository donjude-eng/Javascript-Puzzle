//Enter a  string and find if it's a palindrome

function palindromeCheck(str){
    let newStr = "";

    for (let i = str.length - 1; i >= 0;  i--){
        newStr += str[i];
    }
    if(newStr === str) {
        return true;
    } else {
        return false;
    }
}


let palindrome = palindromeCheck("sos");
console.log(palindrome)

