Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_qulity: 90
});
camera = document.getElementById("camera")
Webcam.attach('#camera')

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id= "captured_image" src = "' + data_uri + '"/>'
    });
}
console.log('ml5 verson : ', ml5.verson)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wPq6MGXbb/model.json', modelLoaded())

function modelLoaded() {
    console.log("hi")
}