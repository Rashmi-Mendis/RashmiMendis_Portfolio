var typed = new Typed(".txt", {
    strings:["Web Developer" , "Interface Designer", "Multimedia Designer"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:500,
    loop:true
});
 

//const audio = new Audio();
//audio.src = "audio/alert.mp3";

function playAudio() 
{
    // body...
    document.getElementById('audio').play();
}
