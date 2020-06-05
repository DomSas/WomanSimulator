let balls = document.getElementsByClassName("ball");
let eye = document.getElementsByClassName("eye");





setTimeout(function () {
    let eyes = document.querySelector(".eyes");
    let welcome = document.querySelector(".welcome");
    eyes.style.visibility = "visible";
    welcome.style.visibility = "hidden";

    document.onmousemove = function () {
        let mouth = document.querySelector(".mouth");
    
    
    
        let x = event.clientX * 100 / window.innerWidth + "%";
        let y = event.clientY * 100 / window.innerHeight + "%";
    
        for (let i = 0; i < 2; i++) {
            balls[i].style.left = x;
            balls[i].style.top = y;
            balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
    
        }
    
        let xmouth = event.clientX * 100 / window.innerWidth;
        let ymouth = event.clientY * 100 / window.innerHeight;
    
    
        if (20 < xmouth && xmouth < 80 && 30 < ymouth && ymouth < 70) {
            mouth.style.visibility = "visible";
            eye[0].style.height = "40px";
            eye[1].style.height = "40px";
        } else {
            mouth.style.visibility = "hidden";
            eye[0].style.height = "120px";
            eye[1].style.height = "120px";
    
        }
    
    
    }
    
 }, 3000);









