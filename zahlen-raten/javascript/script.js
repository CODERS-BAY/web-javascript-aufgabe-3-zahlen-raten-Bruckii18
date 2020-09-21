var highestNumber = 10;
var inputNumber;
var tries = 0;
var maxTries = 3;
var hiddenNumber;
var winning = false;
setRandomNumber();


function setHighestNumber() {
    highestNumber = document.getElementById("highestNumber").value;
    setRandomNumber();
    document.getElementById("highestNumberShow").innerHTML = "You chose " + highestNumber;
}

function setMaxTries() {
    maxTries = document.getElementById("setTries").value;
    tryCounter();
}


function inputCheck() {
    document.getElementById("highestNumber").disabled = true;
    document.getElementById("setTries").disabled = true;
    if (maxTries > tries) {
        var givenNumber = document.getElementById("inputNumber").value;
        if (givenNumber == hiddenNumber) {
            winning = true;
            document.getElementById("infoText").innerHTML = "YEEY! " + givenNumber + " was correct. You won!"
        } else if (givenNumber < hiddenNumber) {
            document.getElementById("infoText").innerHTML = givenNumber + " was not correct. Try a higher number."
        } else if (givenNumber > hiddenNumber) {
            document.getElementById("infoText").innerHTML = givenNumber + " was not correct. Try a lower number."
        }
        tries++;
        tryCounter();
        if (maxTries == tries && !winning) {
            alert("You lost! The hidden number was " + hiddenNumber + ". You can try again.")
            reset();
        }

    }
}

function setRandomNumber() {
    hiddenNumber = Math.floor(Math.random() * highestNumber + 1);
}

function tryCounter() {
    document.getElementById("tryCounter").innerHTML = "Remaining Tries: " + (maxTries - tries);
}

function reset() {
    document.getElementById("setTries").value = "3";
    document.getElementById("highestNumber").value = "10";
    document.getElementById("inputNumber").value = "";
    setMaxTries();
    setHighestNumber();
    setRandomNumber();
    document.getElementById("highestNumber").disabled = false;
    document.getElementById("setTries").disabled = false;
}