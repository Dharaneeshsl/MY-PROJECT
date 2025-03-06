var limit = document.querySelectorAll(".drum").length;
for (var i = 0; i < limit; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var alpha = this.innerHTML;
        if (alpha == "w") {
            var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/crash.mp3");
            audio.play();
        }
        else if (alpha == "a") {
            var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/kick-bass.mp3");
            audio.play();
        }
        else if (alpha == "s") {
            var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/snare.mp3");
            audio.play();
        }
        else if (alpha == "d") {
            var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-1.mp3");
            audio.play();
        }
        else if (alpha == "j") {
            var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-2.mp3");
            audio.play();
        }
        else if (alpha == "k") {
            var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-3.mp3");
            audio.play();
        }
        else if (alpha == "l") {
            var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-4.mp3");
            audio.play();
        }

    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
});



function makeSound(happen) {
    if (happen=== "w") {
        var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/crash.mp3");
        audio.play();
    }
    else if (happen=== "a") {
        var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/kick-bass.mp3");
        audio.play();
    }
    else if (happen=== "s") {
        var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/snare.mp3");
        audio.play();
    }
    else if (happen === "d") {
        var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-1.mp3");
        audio.play();
    }
    else if (happen=== "j") {
        var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-2.mp3");
        audio.play();
    }
    else if (happen === "k") {
        var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-3.mp3");
        audio.play();
    }
    else if (happen === "l") {
        var audio = new Audio("../../../Downloads/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-4.mp3");
        audio.play();
    }
}
