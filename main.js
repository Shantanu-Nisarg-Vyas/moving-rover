canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");

roverwh=100;
roverx=400;
rovery=320;
marsimages=["marsimage1.jpeg", "marsimage2.jpeg", "marsimage3.jpeg", "marsimage4.jpeg", "marsimage5.jpeg", "mars.jpg"];
randomnumber=Math.floor(Math.random() * 6 );
console.log(randomnumber);

mars=marsimages[randomnumber];
console.log(mars)

function view() {
    backimage=new Image();
    backimage.onload=uploadBackground;
    backimage.src=mars;

    roverimage=new Image();
    roverimage.onload=uploadRover;
    roverimage.src="rover.png";
}

function uploadBackground() {
    ctx.drawImage(backimage, 0, 0, 800, 640);
}

function uploadRover() {
    ctx.drawImage(roverimage, roverx, rovery, roverwh, roverwh);
}

window.addEventListener("keydown", mykeydown);

function mykeydown (e) {
    keyPressed=e.keyCode;
    console.log(keyPressed)

    if (keyPressed == "37") {
        left();
        console.log("left")
    }
    if (keyPressed == "38") {
        up();
        console.log("up")
    }
    if (keyPressed == "39") {
        right();
        console.log("right")
    }
    if (keyPressed == "40") {
        down();
        console.log("down")
    }
}

function up() {

    if (rovery>0) {
        rovery=rovery-10;
        console.log(roverx +","+ rovery);
        uploadBackground();
        uploadRover();
    }

}

function down() {

    if (rovery<540) {
        rovery=rovery+10;
        console.log(roverx +","+ rovery);
        uploadBackground();
        uploadRover();
    }

}

function left() {

    if (roverx>0) {
        roverx=roverx-10;
        console.log(roverx +","+ rovery);
        uploadBackground();
        uploadRover();
    }

}

function right() {

    if (roverx<700) {
        roverx=roverx+10;
        console.log(roverx +","+ rovery);
        uploadBackground();
        uploadRover();
    }

}