let video;
let faceMesh;
let faces = [];

function preload(){
    faceMesh = ml5.faceMesh({ maxFaces: 1, flipped: true });
}

function gotFaces(results){
    //console.log(results);
    faces = results;
}

function setup(){
    createCanvas(400, 480);
    video = createCapture(VIDEO, {flipped: true});
    video.hide();

    faceMesh.detectStart(video, gotFaces);

    console.log(ml5.version);
};

function mousePressed(){
    console.log(faces);
};

function draw(){
    background(220);
    image(video, 0, 0)

    if(faces.length > 0){
        let lips = faces[0].lips;
        strokeWeight = 4;
        noFill();
        stroke(255, 100, 255);
        rect(lips.x, lips.y, lips.width, lips.height);

        for(let lipPoint of lips.keypoints){
            strokeWeight = 2;
            stroke(0, 255, 0);
            point(lipPoint.x, lipPoint.y);
        }
    }
};