
var boxEle = document.querySelector("div")
//create storedbtn value
var storedArray = ["12", "1", "15", "23", "24", "7", "11", "10", "17", "5", "8", "13", "25", "9", "16", "22", "18", "19", "21", "3", "14", "6", "2", "20", "4"]
var array = [];
var time = 10 ;
//Create button
for (var i = 0; i < storedArray.length; i++) {
    var boxItemEle = document.createElement("button");
    boxItemEle.setAttribute("class", "box-item");
    boxItemEle.textContent = storedArray[i]
boxItemEle.setAttribute("value", storedArray[i]);
boxItemEle.setAttribute("onClick" , 'btnFunc(this.value)');
    boxEle.append(boxItemEle);
    array.push(boxItemEle);
}
// console.log(array);

var firstValue = ["6", "5", "4", "8", "3", "3", "6", "5", "4", "8", "3", "3" ,"3","6"]
var secValue = ["6", "5", "4", "8", "3", "3", "6", "5", "4", "8", "3", "3","5"]

var emptyArray = [];
var headEle2;
var total ;

var btnEle1 = document.querySelector("#btn1")
btnEle1.addEventListener("click", startFunc);
function startFunc () {
    var randomEle = Math.random()
    var floorEle = Math.floor(randomEle * firstValue.length);
    console.log(floorEle);
    var randomEle2 = Math.random()
    var floorEle2 = Math.floor(randomEle2 * secValue.length);
    console.log(floorEle2);

    headEle2 = document.querySelector("#head2");
    headEle2.innerHTML = (floorEle + "+" + floorEle2);
    // total =~~(firstValue [floorEle])+ ~~(secValue[floorEle2]);
    total = ~~(floorEle) + ~~(floorEle2)
   console.log(total);
//    if (total == emptyArray.length)
    if (!(emptyArray.includes(total))){
        emptyArray.push(total);
        console.log(emptyArray, "emA");
    }
}

var c ;
var assign;
// var ass ;
function btnFunc(totalValue){
   assign = totalValue;
    console.log(assign ,"assign");
   if (assign == total){
     c =  storedArray.indexOf(assign)
    
   array[c].style.backgroundColor = "black" ;
   }
   else{
    alert("YOU LOSE THE GAME")
    headEle2.innerHTML = "VALUE"
    emptyArray = []
    // ass =[]
    // ass.push
    console.log(total , "total");
     c =  storedArray.indexOf(assign)
    console.log(c ,"c y");
    array[c].style.backgroundColor = "red";
    endFunc()
   }
  }


//end of the game
var endEle = document.querySelector("#btn2");
endEle.addEventListener("click", endFunc)
function endFunc () {
    headEle2.innerHTML = "VALUE"
    emptyArray = []
    for (var j = 0; j< 25;  j++){
        array[j].style.backgroundColor = "" ;
        // rgba(255, 255, 255 , 0.2)
    }
};