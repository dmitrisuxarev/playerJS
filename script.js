let state;
let basePlayer;
document.addEventListener("DOMContentLoaded",()=>{
 basePlayer = document.querySelector(".base-player")
console.dir(basePlayer)
let playButton = document.querySelector(".play")

let cover = document.querySelector(".cover")
let songName = document.querySelector(".song-name")
let textButton = document.querySelector(".song-text-btn")
let playerWindow = document.querySelector(".player-window")
let playerWrapper = document.querySelector(".player-wrapper")

let songText = document.querySelector(".song-text")
let playlist = document.querySelector(".playlist")
let playlistButton = document.querySelector(".playlist-btn")

 state = {
    playlistIsOpen:false,
    songTextIsOpen:false,
    isPlay:false,
}

function togglePlayerWindow(){
    [cover,songName,textButton,playerWindow,playerWrapper].map(e=> e.classList.toggle("window-open"));
    state.playerWindowOpen = !state.playerWindowOpen;
}
function togglePlaylist(){
    if(state.songTextIsOpen){
        toggleSongText();
        setTimeout(()=>{
            playlist.classList.toggle("open")
            togglePlayerWindow() 
          },200) 
    }
    else{
       playlist.classList.toggle("open")
    togglePlayerWindow() 
    }
    
    state.playlistIsOpen = !state.playlistIsOpen
    console.log(state);
}
function toggleSongText(){
    if(state.playlistIsOpen){
        togglePlaylist();
        setTimeout(()=>{
            songText.classList.toggle("open")
            togglePlayerWindow() 
          },200) 
    }
    else{
       songText.classList.toggle("open")
    togglePlayerWindow() 
    }
    
    state.songTextIsOpen = !state.songTextIsOpen
    console.log(state);
}
playButton.addEventListener("click",(e)=>{
    if(state.isPlay){
        basePlayer.pause()
    }
    else{
        basePlayer.play()
    }
    cover.classList.toggle("stop")
    state.isPlay = !state.isPlay
    // if(cover.classList.contains("cover-up")){ // если открыт текст и нажимаем кнопку играть\пауза
    //     cover.classList.toggle("cover-up-stop")
    // }
    // else{
    //    cover.classList.toggle("cover-stop") //вкл\выкл проигрывание
    // }
    
})
textButton.addEventListener("click",()=>{   
    toggleSongText()
})
playlistButton.addEventListener("click",e=>{
    togglePlaylist()
})


})