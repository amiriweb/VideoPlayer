const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
console.log(video);

btn.addEventListener('click',function(){
  btn.classList.toggle('slide');
  if(btn.classList.contains("slide")) {
    video.pause();
  } else {
    video.play();
  }
});

const preloader = document.querySelector('.preloader');
window.addEventListener('load',function() {
  preloader.classList.add('hide-preloader');
});
