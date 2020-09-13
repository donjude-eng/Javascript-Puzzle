//Reverse array.

arrayOne = [10, 12 ,13, 14, 15, 16, 17]

function reverseArray(){
    for(let i = arrayOne.length - 1; i >=0 ; i--){
        console.log(arrayOne[i])
    }
}

//reverseArray();

//ADD ARRAY

arraytWO = [5, 6, 7, 8, 9, 10, 11, 12]

function addArray(){
    for(let i = 0; i < arraytWO.length; i++){
        console.log(arraytWO[i] + arraytWO[i+1])
    }
}

addArray();