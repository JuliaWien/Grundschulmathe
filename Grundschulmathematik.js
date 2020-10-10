alert("Grundschulmathe");

//benötigte Variablen
var correctCount = 0;
var testsCount = 0;
var levelCount = 0;
var rechenzeichen;
//Ermitteln der Zufallszahl
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rechenaufgabe() 
{
    switch (levelCount) {
        case 0:
            rechenzeichen = "+";

            var number1 = rand(1, 20);
            var number2 = rand(1, 20);
            var result = number1 + number2;

            var feed = prompt("Wie viel ist " + number1 + rechenzeichen + number2);
            break;

        case 1:
            rechenzeichen ="-"

            var number1 = rand(1, 20);
            var number2 = rand(1, number1);

            var result = number1 - number2;

            

            var feed = prompt("Wie viel ist " + number1 + rechenzeichen + number2);
            break;
    }


    if (result == feed) {
        correctCount++;
        alert("true " + correctCount + "/5");
    }
    else {
        alert("false " + correctCount + "/5");
    }

    if (feed != null)
        {
            document.getElementById("demo").innerHTML =
                "Your result was " + feed + " You got " + correctCount + "/5";
        }

    testsCount++;
    if (testsCount == 5)
     {
        if (correctCount >= 4) 
        {
            alert("Well, done you have reached the next level");
            levelCount++;
            correctCount = 0;
            testsCount = 0;
            alert (levelCount);
        }
        else {
            alert("To reach the next level you need to try it again");
            correctCount = 0;
            testsCount = 0;
        }
    }
    if (levelCount == 2)
    {
        levelCount == 0;
    }
} 
































/*do { // Dies ist die äußere Schleife
    for (testsCount = 0; testsCount < 5; testsCount++) {
        alert(testsCount);
        if (result == feed)
        {
            correctCount++;
            alert("true " + correctCount + "/5");
            alert(testsCount);
        }
        else {
            alert("false");
        }
        if (feed != null)
        {
            document.getElementById("demo").innerHTML =
                "Your result was " + input + " You got " + correctCount + "/5";
        }
    }
    if (testsCount == 5) {
        if (correctCount >= 4)
        {
            alert("Well, done you have reached the next level");
            levelCount++;
            correctCount = 0;

        }
        else
        {
            alert("To reach the next level you need to try it again");
            correctCount = 0;
        }
    }

} while (true);
}
*/