var f = f;
var c = c;

function askName() {
    var name = prompt("Please enter your name")
    return name
}
function askTemp() {
    var temp = prompt("Is your temperature in fahrenheit or celsuis type f for fahrenheit and c for celsuis")
    return temp
}
function askNumb() { 
    var numb = prompt("What is the number of your temperature?")
    return numb
}
function convertingTemp(t, n) {
    if (t == "c"){
        var n = ((n * 9)/5) + 32;
        alert("Your temperature is " + n + "in F");

    }else{
        var n = ((n - 32)*5)/9;
        alert("Your temperature is " + n + "in C");
    }
}
var n = askName()
alert("Hello there " + n);
convertingTemp(askTemp(),askNumb())


//comment