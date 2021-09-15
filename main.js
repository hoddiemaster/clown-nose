noseX = 0;
noseY = 0;
function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(500,250);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes)
}



function take_snapshot(){
    save("img1.png");
}
 function modelLoaded(){
     console.log("poseNet is initialized");
 }
 function gotposes(results){
     if(results.length>0){
console.log(results);
noseX =results[0].pose.nose.x;
noseY =results[0].pose.nose.y;
console.log(noseX,noseY);
     }
    
 }
 function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    rect(noseX,noseY,20,20);
    
}