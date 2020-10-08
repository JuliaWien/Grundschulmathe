
alert("Grundschulmathe");

var min = 1;
var max = 20;

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var correctCount = 0;
var testsCount = 0;


function zufall() {
    var number1 = rand(1, 20);
    var number2 = rand(1, 20);
    var result = number1 + number2;

    testsCount++
    var Ergebnis = prompt("Wie viel ist " + number1 + " + " + number2);

    if (result == Ergebnis) {
        correctCount++;
        alert("true " + correctCount + "/5");
        if (testsCount == 5) {
            if (correctCount >= 4) {
                correctCount = 0;
                alert("Done");
            }
            else {
                alert("go and learn again");
                correctCount = 0;
            }
        }
        else {
            if (testsCount == 5) {
                if (correctCount >= 4) {
                    correctCount = 0;
                    alert("Done");
                }
                else {
                    alert("go and learn again");
                    correctCount = 0;
                }
            }
        }

        if (Ergebnis != null) {
            document.getElementById("demo").innerHTML =
                "Your result was " + Ergebnis + " You got " + correctCount + "/5";
        }
        if (testsCount == 5) {
            testsCount = 0;
        }
    }
}
