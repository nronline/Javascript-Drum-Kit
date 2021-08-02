var noOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfButtons; i++ ){

    // Anonymous function to create an  event listener 
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        //var crash = new Audio('sounds/crash.mp3');
        //crash.play();
        if (this.innerHTML == "w"){
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        }
        else if (this.innerHTML == "a"){
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        }
        else if (this.innerHTML == "s"){
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        }
        else if (this.innerHTML == "d"){
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        }
        else if (this.innerHTML == "j"){
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        }
        else if (this.innerHTML == "k"){
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        }
        else if (this.innerHTML == "l"){
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        }
        else{

        }
    }); 

}