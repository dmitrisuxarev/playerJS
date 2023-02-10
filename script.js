document.addEventListener("DOMContentLoaded",()=>{
let playButton = document.querySelector(".play")
let textButton = document.querySelector(".audio-text")
let cover = document.querySelector(".cover")
let songText = document.querySelector(".song-text")


playButton.addEventListener("click",(e)=>{
    if(cover.classList.contains("cover-up")){
        cover.classList.toggle("cover-up-stop")
    }
    else{
       cover.classList.toggle("cover-play") 
    }
    
})
textButton.addEventListener("click",()=>{
    if(cover.classList.contains("cover-up-stop")){
        cover.classList.toggle("cover-up-stop")
        cover.classList.toggle("cover-play") 
    }
    songText.classList.toggle("song-text-open")
    cover.classList.toggle("cover-up")
})


})