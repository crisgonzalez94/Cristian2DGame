//Va en true si la musica se esta reproduciendo
let audio = document.getElementById("audio")
let btnAudio = document.getElementById("btnAudio");
let musicplay = false;

document.getElementById("btnAudio").addEventListener("click",function(){
  if(musicplay){
    audio.pause();
    btnAudio.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
    musicplay = false;
  }else{
    //Play music
    audio.play();
    btnAudio.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
    musicplay = true;
  }
});