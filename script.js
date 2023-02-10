document.addEventListener("DOMContentLoaded",()=>{
let playButton = document.querySelector(".play")
let textButton = document.querySelector(".audio-text")
let cover = document.querySelector(".cover")
let playerWindow = document.querySelector(".player-window")


playButton.addEventListener("click",(e)=>{
    if(cover.classList.contains("cover-up")){ // если открыт текст и нажимаем кнопку играть\пауза
        cover.classList.toggle("cover-up-stop")
    }
    else{
       cover.classList.toggle("cover-play") //вкл\выкл проигрывание
    }
    
})
textButton.addEventListener("click",()=>{
    if(cover.classList.contains("cover-up-stop")){ //текст отключаем но оставляем состояние играть\пауза
        cover.classList.toggle("cover-up-stop")
        cover.classList.toggle("cover-play") 
    }
    playerWindow.classList.toggle("player-window-open") //открыть закрыть текст
    cover.classList.toggle("cover-up")
})


})