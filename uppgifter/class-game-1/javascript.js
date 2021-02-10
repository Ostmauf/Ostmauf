//Variables
let balls = document.getElementsByClassName("ball");

balls[0].addEventListener("click", ballClick)



function ballClick() {

    //Balls x and y position
    /*
    balls[0].style.left = ((window.innerWidth - 70) * Math.random()) + "px";
    balls[0].style.top = ((window.innerHeight - 70) * Math.random()) + "px";
    */ 

   document.body.removeChild(balls);

}






