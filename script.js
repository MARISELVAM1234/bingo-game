var boxEle = document.querySelector(".box");
//create storedbtn value
var storedArray = ["12", "1", "15", "23", "24", "7", "11", "10", "17", "5", "8", "13", "25", "9", "16", "22", "18", "19", "21", "3", "14", "6", "2", "20", "4"]
var array = [];
var boxItemEle ;
//Create button
for (var i = 0; i < storedArray.length; i++) {
    boxItemEle = document.createElement("button");
    boxItemEle.setAttribute("class", "box-item");
    boxItemEle.textContent = storedArray[i]
    boxItemEle.setAttribute("value", storedArray[i]);
    boxItemEle.setAttribute("onClick", 'btnFunc(this.value)');
    boxEle.append(boxItemEle);
    array.push(boxItemEle);
    // boxItemEle.disabled =true ;
}

var firstValue = ["6", "5", "4", "8", "3", "3", "6", "5", "4", "8", "3", "3", "3", "6"]
var secValue = ["6", "5", "4", "8", "3", "3", "6", "5", "4", "8", "3", "3", "5"]
var emptyArray = [];
var headEle2;
var scoreEle ;
var total;
var time = 10;
var t ;
// function setTimerFun() {
//     time = 10 ;
//     t = setInterval(startFunc, 1000);
// }
var imgArray =[];
var imgEle ;
var btnEle1 = document.querySelector("#btn1");
btnEle1.addEventListener("click", startFunc);
function startFunc() {
    // imgEle.setAttribute('src','');
    if (imgArray.length == 0){
        
        var flexEle = document.querySelector(".flex-part");
        var divEle = document.createElement("div");
        flexEle.append(divEle);
       imgEle = document.createElement("img");
        imgEle.setAttribute("src" , "/image/think.png");
    // imgEle.disabled = true ;

        divEle.appendChild(imgEle);
        console.log(imgArray,"imdS");
        console.log(imgEle ,"iS");
        imgArray.push(imgEle)
        // imgArray =[]
    }

   
    if (emptyArray.length == storedArray.length && scoreEle.innerHTML == 25){
        alert("YOU ARE WIN THE GAME");
imgEle.setAttribute ("src" , "/image/win.jpg")
    }
    while( emptyArray.length < storedArray.length ) {
        
        var randomEle = Math.random()
        var floorEle = Math.floor(randomEle * firstValue.length);
        var randomEle2 = Math.random()
        var floorEle2 = Math.floor(randomEle2 * secValue.length);
        btnEle1.disabled = true ;
        headEle2 = document.querySelector("#head2");
        headEle2.innerHTML = (floorEle + "+" + floorEle2);
        total = ~~(floorEle) + ~~(floorEle2) ;
        scoreEle = document.querySelector("#score");

        // headEle3.innerHTML =
        if (floorEle == 0 && floorEle2 == 0) {
            continue;
        }
        
        else if  (!(emptyArray.includes(total))) {
            emptyArray.push(total);
            break;
        }
       

    }

}


var c;
var assign;
function btnFunc(totalValue) {
    assign = totalValue;
    console.log(assign, "assign");
    if (assign == total) {
        c = storedArray.indexOf(assign);
        // console.log(c ,"c");
        array[c].style.backgroundColor = "black";
        var audioBl =new Audio ("/blk.mp3");
        audioBl.play()
        btnEle1.disabled = false ;
        scoreEle.innerHTML = emptyArray.length 
        console.log(scoreEle);
        startFunc();
    }
    else if (assign != total) {
        alert("YOU LOSE THE GAME")
        headEle2.innerHTML = "VALUE";
        emptyArray = []
        c = storedArray.indexOf(assign);
        array[c].style.backgroundColor = "red";
        var audioRe =new Audio ("/str.mp3");
        audioRe.play()
        imgEle.setAttribute("src" , "/image/wrong.jpg");
        btnEle1.disabled = false ;
        // array[c].style.backgroundColor = " blue";
// scoreEle.innerHTML = ""

    }
}

//end of the game
var endEle = document.querySelector("#btn2");
endEle.addEventListener("click", endFunc);
function endFunc() {
    headEle2.innerHTML = "VALUE";
    scoreEle.innerHTML = 0 ;
    btnEle1.disabled = false ;
    imgEle.setAttribute ("src" ,"/image/end.jpg");
    // imgEle.disabled = true ;
    imgArray =[]
    for (var j = 0; j < storedArray.length; j++) {
        array[j].style.backgroundColor = "";
       
        // console.log(imgArray,"imdE");
        // console.log(imgEle ,"iE");
        // imgArray =["2"]
    } 
    // if ()
};

//practice
// function getRectArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//       throw 'Parameter is not a number!';
//     }
//   }
  
//   try {
//     getRectArea(3, 'A');
//   } catch (e) {
//     console.error(e);
//     // expected output: "Parameter is not a number!"
//   }
  