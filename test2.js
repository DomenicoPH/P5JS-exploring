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
    background(0);
    //image(video, 0, 0);

    if(faces.length > 0){
        let face = faces[0].faceOval;
        for(let facePoint of face.keypoints){
            strokeWeight = 4;
            stroke(0, 255, 0);
            point(facePoint.x, facePoint.y);
        };

        let lEye = faces[0].leftEye;
        for(let leftEye of lEye.keypoints){
            strokeWeight = 4;
            stroke(0, 255, 0);
            point(leftEye.x, leftEye.y);
        };
        let lEyeBr = faces[0].leftEyebrow;
        for(let leftEyeBr of lEyeBr.keypoints){
            strokeWeight = 4;
            stroke(0, 255, 0);
            point(leftEyeBr.x, leftEyeBr.y);
        };

        let rEye = faces[0].rightEye;
        for(let rightEye of rEye.keypoints){
            strokeWeight = 4;
            stroke(0, 255, 0);
            point(rightEye.x, rightEye.y);
        };
        let rEyeBr = faces[0].rightEyebrow;
        for(let rightEyeBr of rEyeBr.keypoints){
            strokeWeight = 4;
            stroke(0, 255, 0);
            point(rightEyeBr.x, rightEyeBr.y);
        };
        
        let lips = faces[0].lips;
        for(let lipPoint of lips.keypoints){
            strokeWeight = 4;
            stroke(0, 255, 0);
            point(lipPoint.x, lipPoint.y);
        };
    }
};