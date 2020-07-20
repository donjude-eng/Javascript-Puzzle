// document.getElementById('key_a').addEventListener('click' , keyPressA);
// document.getElementById('key_b').addEventListener('click' , keyPressB);
// document.getElementById('key_c').addEventListener('click' , keyPressC);
// document.getElementById('key_d').addEventListener('click' , spacePress);
// document.getElementById('key_e').addEventListener('click' , enterPress);
document.getElementById('body_id').addEventListener('click', pressWindow);

currentText = document.getElementById("keyboard").value;
console.log(currentText);

let currIndex = 0;
let flag = 0;
let count = document.getElementById('keypress').childElementCount;

let timer = setInterval(bSelectKey, 1000);


function pressWindow(e){
  console.log('Button Pressed');
  e.preventDefault();

  let currentKey = document.getElementsByClassName('charinfocus');
  console.log(currentKey);
  console.log('text = ' ,currentKey[0].innerHTML);
  console.log('id = ' ,currentKey[0].id);

//   if(currentKey[0].id === 'key_a') {
//       document.getElementById("keyboard").value += "A";

//   }else if(currentKey[0].id === 'key_b') {
//     document.getElementById("keyboard").value += "B";

//   } else if(currentKey[0].id === 'key_c'){
//     document.getElementById("keyboard").value += "C";

//   }else if(currentKey[0].id === 'key_sp'){
//       document.getElementById('keyboard').value +=" ";

//   } else if(currentKey[0].id === 'key_en'){
//       document.getElementById('keyboard').value +="\n";
//   }

 clearInterval(timer);
 timer = 0;

 timer = setInterval(fSelectKey , 1000);
 console.log("Forward", timer);

}



function fSelectKey() {
    // console.log('Got a click');
    // console.log('1 currIndex =' , currIndex);


    if(flag === 0){
        console.log('Entering for the first time and skipping current index increment');
        flag = 1;

    } else {

        let prevKey = document.getElementById('keypress').children[currIndex];
        prevKey.classList.remove('charinfocus');

        currIndex = currIndex + 1;

        //console.log('2 currIndex =' , currIndex);

        if (currIndex >= count) {
            currIndex = 0;

        }
    }



    //console.log('3 currIndex =' , currIndex);

    let enterKey = document.getElementById('keypress').children[currIndex];

    enterKey.classList.add('charinfocus');

    //console.log('4 currIndex =' , currIndex);
   // console.log('count = ' , count);

   // console.log(enterKey);
}

function bSelectKey() {
    // console.log('Got a click');
    console.log('20 currIndex =' , currIndex);


    if(flag === 0){
        console.log('Entering for the first time and skipping current index increment');
        flag = 1;


    } else {

        let prevKey = document.getElementById('keypress').children[currIndex];
        prevKey.classList.remove('charinfocus');

        currIndex = currIndex - 1;

        console.log('Minus currIndex =' , currIndex);

        if(currIndex === -1){
            currIndex = count-1;
        }


    }



    //console.log('3 currIndex =' , currIndex);

    let enterKey = document.getElementById('keypress').children[currIndex];

    enterKey.classList.add('charinfocus');

    //console.log('4 currIndex =' , currIndex);
   // console.log('count = ' , count);

   // console.log(enterKey);
}

function keyPressA(e) {
    e.preventDefault()
    document.getElementById('key_a').classList.add('charinfocus');
    document.getElementById("keyboard").value += "A";
    currentText = document.getElementById("keyboard").value;

    arrayText = [...currentText];
    //console.log(arrayText);

    //console.log(currentText);
    console.log("Pressed A")
}

function keyPressB(e) {
    e.preventDefault()
    document.getElementById("keyboard").value += "B";

    //console.log("Pressed B")
}

function keyPressC(e) {
    e.preventDefault()
    document.getElementById("keyboard").value += "C";

    //console.log("Pressed C")
}

function spacePress(e) {
    e.preventDefault()
    document.getElementById('keyboard').value += (' ');
    //console.log("space")
}

function enterPress(e){
  e.preventDefault();

  document.getElementById('keyboard').value += "\n";
  //console.log("Pressed Enter")
}
