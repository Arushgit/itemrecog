//https://teachablemachine.withgoogle.com/models/GZiYH2fFk/
Webcam.set({
    width:350, 
    height:300,
    image_format:"png",
    png_quality:90
});
Camera=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capturedimg' src='"+data_uri+"'>";
    });

}
console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iW98kyr2I/model.json", model_loaded);
function model_loaded() {
    console.log("Model is Loaded");
}
function check() {
    img = document.getElementById("capturedimg");
    classifier.classify(img, got_result);
    
    
    
}
function got_result(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        document.getElementById("resultobjectname").innerHTML=results[0].label
        document.getElementById("resultobjectaccuracy").innerHTML=results[0].confidence.toFixed(3);
    
    }
}
