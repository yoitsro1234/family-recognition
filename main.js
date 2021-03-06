function setup(){
    video = createCapture(VIDEO);
    video.hide();

    canvas = createCanvas(300, 300);
    canvas.center();

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5j0BYHhQK/", modelLoaded);
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotResult(error, results){
    if(error){
        console.log("error404wrongcodeyouhavetoredoitlol");
    } else {
        document.getElementById("obj-tag").innerHTML = results[0].label;
        document.getElementById("acc-tag").innerHTML = results[0].confidence.toFixed(3);    
    }
}