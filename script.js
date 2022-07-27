
var boxEle = document.querySelector("div")
//create storedbtn value
var storedArray = ["12", "13", "15", "9", "8", "7", "11", "10", "12", "5", "8", "13", "14", "9", "16", "17", "18", "19", "21", "13", "14", "6", "9", "20", "4"]
//Create button
for (var i = 0; i < storedArray.length; i++) {
    var boxItemEle = document.createElement("button");
    boxItemEle.setAttribute("id", "box-item");
    boxItemEle.textContent = storedArray[i]

    boxEle.append(boxItemEle);
    // console.log(boxEle);
}

var firstValue = ["6", "5", "4", "8", "3", "3", "6", "5", "4", "8", "3", "3"]
var secValue = ["6", "5", "4", "8", "3", "3", "6", "5", "4", "8", "3", "3"]

var emptyArray = []
var headEle2;
var ab

var btnEle1 = document.querySelector("#btn1")
btnEle1.addEventListener("click", function () {
    var randomEle = Math.random()
    var floorEle = Math.floor(randomEle * firstValue.length);
    console.log(floorEle);
    var randomEle2 = Math.random()
    var floorEle2 = Math.floor(randomEle2 * secValue.length);
    console.log(floorEle2);

    headEle2 = document.querySelector("#head2");

    headEle2.innerHTML = (floorEle + "+" + floorEle2);
    ab = ~~(floorEle) + ~~(floorEle2)
    console.log(ab);
    emptyArray.push(ab);
    console.log(emptyArray);

});

//end of the game
var endEle = document.querySelector("#btn2");
endEle.addEventListener("click", function () {
    headEle2.innerHTML = "VALUE"
    emptyArray = []

});