// finding them length of the number of buttons 
var playerName =prompt("Enter Your Name ");

document.querySelector(".randomText").innerHTML="Welcome "+playerName+ " <br>Press R to Reload";

var numberOfDrums = document.querySelectorAll(".drum").length;


// selecting all the button using loops 

for (var i = 0; i < numberOfDrums; i++) {

    // selecting thr particular button 

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("Clicked");

        // finding the word written on the inner HTml of the button
        var buttonInnerHtml = this.innerHTML;

        // playing particiular sounds of each button using function prodeuce below 
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);


    }
    );

}
// identifying the key presses and identifying which key was prssed was done using the event word present there

document.addEventListener("keydown", function (event) {
    //  alert("keypressed");
    makeSound(event.key);
    buttonAnimation(event.key);

    console.log(event);
});

// the function for particular sound of the buttons 

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "r":
            location.reload();
            break;
            
        default:
            console.log(this);
            break;
    }

}


function buttonAnimation(currentkey){
    var activeButton= document.querySelector("."+currentkey);

    activeButton.classList.add("pressed");
 
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);


    }


