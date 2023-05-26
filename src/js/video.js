let play_video = document.querySelector(".circle")
let video = document.getElementById("video")

const playVideo = () => {
    video.play()
    play_video.style.display ="none"
}

const setVideo = () => {
    if(video.play()) {
        video.pause()
    }
    if(video.pause()) {
        video.play()
    }   
    
}

play_video.addEventListener("click", playVideo)
video.addEventListener("click", setVideo)