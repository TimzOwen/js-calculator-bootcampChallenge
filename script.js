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

//work on the operators
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        //set the cal to clear
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutPut()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutPut();
            var history = getHistory();
            if (output != null) {
                output = reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
//work on the Numbers onclick
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {

        //print  out the numbers to the screen
        var output = reverseNumberFormat(getOutPut());
        //check if it is a numbers
        if (output != NaN) {
            output += this.id;
            printOutput(output);
        }
    })
}