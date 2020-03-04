//get the history value using the function
function getHistory() {
    return document.getElementById("history-value").innerText;
}
// alert(getHistory());

//get the history number
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}
//function to get output
function getOutPut() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

//function to separate the value in threes
function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
//function to reverse the number format 
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}
// alert(reverseNumberFormat(getOutPut()));

//work on the operators
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        alert("the operator clicked s " + this.id);
    })
}