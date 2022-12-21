function setup() {
    video = createCapture(VIDEO);
    video.size(560, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is initialized')
}

difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload() {
}

function draw() {
    background('#969A97');
    textSize(difference);
    fill('#F900093');
    stroke('#F900093');
    text("Akshita", 100, 200)
    document.getElementById("square_sides").innerHTML = "Width And Height of a Square will be = " + difference + "px";
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX =" + leftWristX + "rightWrist =" + rightWristX + "difference =" + difference);
    }
}

