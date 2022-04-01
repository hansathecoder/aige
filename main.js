noseX=0
noseY=0
difference=0;
rightwristX=0
leftwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    
canvas=createCanvas(550,550);
canvas.position(560,150);


poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log("modelLoaded");
}
function gotPoses(results){
    if(results.length>0)
    {console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nosex="+noseX+"nosey"+noseY);
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);

console.log("leftwristx="+leftwristX+"rightwristx"+rightwristX+"difference="+difference)
}

}
function draw(){
    background('#03d3fc');
    document.getElementById("square_side").innerHTML="width and height of the square will be "+difference+"px";
    fill('#03b1fc');
    stroke('#03b1fc');
    square(noseX,noseY,difference);
}
