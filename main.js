var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML ="";
    recognition.start();

}

recognition.onresult = function run(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    speak();
}

function speak()
{
    var synth = window.speechSynthesis;
    var speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

var camera = document.getElementById("camera");

Webcam.set({
    width: 330,
    height: 220,
    image_format: "jpeg",
    jpeg_quality: 90
});