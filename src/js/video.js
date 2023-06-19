let play_video = document.querySelector(".circle");
let video = document.getElementById("video");

const playVideo = () => {
  video.play();
  play_video.style.display = "none";
  video.setAttribute("controls","controls")
};

play_video.addEventListener("click", playVideo);

