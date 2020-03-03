//get the history value using the function
function getHistory() {
    return document.getElementById("history-value").innerText;
}
// alert(getHistory());

//get the history number
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}
printHistory("9*9+8");