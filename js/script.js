var car = document.querySelector(".car");
var road = document.querySelector(".surface");
road.style.animationPlayState = "paused";
car.style.animationPlayState = "paused";
var audio = new Audio("audio/carAudio2.mp3");
var audio3 = new Audio("audio/audio4.mp3");
var audio4 = new Audio("audio/carigid.mp3");
var audio5 = new Audio("audio/stop.mp3");
document.addEventListener("keydown", function(event){
  console.log(event.key);
  if(event.key==="s" || event.key==="S" ){
        audio4.play();
        car.style.animationPlayState = "running";
    }

  if(event.key==="Backspace"){
    if(road.style.animationPlayState = "running"){
          road.style.animationPlayState = "paused";
    }
    audio5.play();
    audio.pause();
    if(car.style.animationPlayState = "running"){
        car.style.animationPlayState = "paused";
    }
  audio4.pause();
  }

  if(event.key==="Enter"){
    if(road.style.animationPlayState = "paused"){
          road.style.animationPlayState = "running";
    }
    if(car.style.animationPlayState = "paused"){
          car.style.animationPlayState = "running";
    }
    audio4.pause();
    audio.play();
    audio.loop="true";
  }

  if(event.key==="h" || event.key==="H"){
    var audio2 = new Audio("audio/carAudio3.mp3");
    audio2.play();
  }

  if(event.key==="p" || event.key==="P"){
    if(audio3.paused){
      audio3.play();
    }
    else{
      audio3.pause();
    }
  }
})

var start = document.querySelector("#start");
var move = document.querySelector("#move");
var stop = document.querySelector("#stop");
var horn = document.querySelector("#horn");
var play = document.querySelector("#play");

start.addEventListener("click",function(){
  audio4.play();
  car.style.animationPlayState = "running";
})

stop.addEventListener("click",function(){
  if(road.style.animationPlayState = "running"){
        road.style.animationPlayState = "paused";
  }
  audio5.play();
  audio.pause();
  if(car.style.animationPlayState = "running"){
      car.style.animationPlayState = "paused";
  }
  audio4.pause();
})

move.addEventListener("click",function(){
  if(road.style.animationPlayState = "paused"){
        road.style.animationPlayState = "running";
  }
  if(car.style.animationPlayState = "paused"){
        car.style.animationPlayState = "running";
  }
  audio4.pause();
  audio.play();
  audio.loop="true";
})

horn.addEventListener("click",function(){
  var audio2 = new Audio("audio/carAudio3.mp3");
  audio2.play();
})

play.addEventListener("click",function(){
  if(audio3.paused){
    audio3.play();
  }
  else{
    audio3.pause();
  }
})
