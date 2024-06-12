// script.js
document.getElementById('speak-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    if (textInput) {
        const speech = new SpeechSynthesisUtterance(textInput);
        speech.lang = 'en-US'; // Set the language to English (US)
        speech.pitch = 1; // Set pitch
        speech.rate = 1; // Set rate
        speechSynthesis.speak(speech);
    } else {
        alert('Please enter some text to speak.');
    }
});
