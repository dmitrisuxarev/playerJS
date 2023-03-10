let state;
let basePlayer;
document.addEventListener("DOMContentLoaded", () => {
    basePlayer = document.querySelector(".base-player")
    let progressSlider = new CustomeSider(".custom-slider",basePlayer,"currentTime")
    let volumeSlider = new CustomeSider(".audio-volume",basePlayer,"volume")
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
        playlistIsOpen: false,
        songTextIsOpen: false,
        isPlay: false,
    }

    function togglePlayerWindow() {
        [cover, songName, textButton, playerWindow, playerWrapper].map(e => e.classList.toggle("window-open"));
        state.playerWindowOpen = !state.playerWindowOpen;
    }
    function togglePlaylist() {
        if (state.songTextIsOpen) {
            toggleSongText();
            setTimeout(() => {
                playlist.classList.toggle("open")
                togglePlayerWindow()
            }, 200)
        }
        else {
            playlist.classList.toggle("open")
            togglePlayerWindow()
        }

        state.playlistIsOpen = !state.playlistIsOpen
        console.log(state);
    }
    function toggleSongText() {
        if (state.playlistIsOpen) {
            togglePlaylist();
            setTimeout(() => {
                songText.classList.toggle("open")
                togglePlayerWindow()
            }, 200)
        }
        else {
            songText.classList.toggle("open")
            togglePlayerWindow()
        }

        state.songTextIsOpen = !state.songTextIsOpen
        console.log(state);
    }

    function changeSong(song){
        console.log(basePlayer.duration);
        progressSlider.setRange(0,Math.round(basePlayer.duration))
    }
    
    setTimeout(()=>changeSong,5000)

    basePlayer.addEventListener('loadedmetadata',e=>{
        progressSlider.setRange(0,Math.round(basePlayer.duration))
    })
    basePlayer.addEventListener("timeupdate",e=>{
        progressSlider.setSliderValue(e.target.currentTime)
    })
    playButton.addEventListener("click", (e) => {
        if (state.isPlay) {
            basePlayer.pause()
        }
        else {
            basePlayer.play()
        }
        cover.classList.toggle("stop")
        state.isPlay = !state.isPlay
        console.dir(progressSlider)
        // if(cover.classList.contains("cover-up")){ // ???????? ???????????? ?????????? ?? ???????????????? ???????????? ????????????\??????????
        //     cover.classList.toggle("cover-up-stop")
        // }
        // else{
        //    cover.classList.toggle("cover-stop") //??????\???????? ????????????????????????
        // }

    })
    textButton.addEventListener("click", () => {
        toggleSongText()
    })
    playlistButton.addEventListener("click", e => {
        togglePlaylist()
    })


})