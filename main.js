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

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ITX8-u0KT/model.json', modelLoaded())

function modelLoaded() {
    console.log("welcome!")
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) { console.error(error); } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        if (results[0].label == "Victory") { document.getElementById("update_emoji").innerHTML = "&#9996;" }
        if (results[0].label == "Thumbs Down") { document.getElementById("update_emoji").innerHTML = "&#9996;" }
        if (results[0].label == "Thumbs Up") { document.getElementById("update_emoji").innerHTML = "&#128077;" }
        if (results[1].label == "Victory") { document.getElementById("update_emoji2").innerHTML = "&#9996;" }
        if (results[1].label == "Thumbs Down") { document.getElementById("update_emoji2").innerHTML = "&#9996;" }
        if (results[1].label == "Thumbs Up") { document.getElementById("update_emoji2").innerHTML = "&#128077;" }
    }
}