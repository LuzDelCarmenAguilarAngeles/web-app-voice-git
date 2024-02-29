const startButton = document.getElementById('startButton');
const resultDiv = document.getElementById('result');

if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'es-ES';
//fs
    startButton.addEventListener('click', function() {
        recognition.start();
    });

    recognition.onresult = function(event) {
        const result = event.results[0][0].transcript;
        resultDiv.innerHTML = `<p>Orden identificada: ${result}</p>`;
    };
} else {
    resultDiv.innerHTML = "<p>La funcionalidad de reconocimiento de voz no está disponible en tu navegador.</p>";
}
