const content = document.getElementById("content");
const btnspeak = document.getElementById("btnspeak");

btnspeak.addEventListener("click", () =>{
    const utterance = new
    SpeechSynthesisUtterance(content.value);
    window.speechSynthesis.speak(utterance);
});
