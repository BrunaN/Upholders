let imgs = document.querySelectorAll(".header-carousel .img");
let texts = document.querySelectorAll(".header-carousel .text-carousel");
let overlays = document.querySelectorAll(".overlay-img");
let dots = document.querySelectorAll(".dot");
let left = document.querySelector(".arrow.left");
let right = document.querySelector(".arrow.right");

let current = 0;
let current_o = 0;

function forRight(){
    imgs[current].classList.remove("active");
    overlays[current_o].classList.remove("active");
    dots[current].classList.remove("active");
    texts[current].classList.remove("active");

    current++;
    current_o++;

    if(current > imgs.length-1){
        current=0;
    }

    if(current_o > overlays.length-1){
        current_o = 0;
    }

    imgs[current].classList.add("active");
    dots[current].classList.add("active");
    overlays[current_o].classList.add("active");
    texts[current].classList.add("active");
}

function forLeft(){
    imgs[current].classList.remove("active");
    overlays[current_o].classList.remove("active");
    dots[current].classList.remove("active");
    texts[current].classList.remove("active");
    current--;
    current_o--;

    if(current < 0){
        current = imgs.length-1;
    }
    if(current_o < 0){
      current_o = overlays.length-1;
    }
    imgs[current].classList.add("active");
    dots[current].classList.add("active");
    overlays[current_o].classList.add("active");
    texts[current].classList.add("active");
}

right.addEventListener("click", forRight);
left.addEventListener("click", forLeft);

function dotSelect(i){
    imgs[current].classList.remove("active");
    dots[current].classList.remove("active");
    texts[current].classList.remove("active");
    current = i
    imgs[current].classList.add("active");
    dots[current].classList.add("active");
    texts[current].classList.add("active");

    overlays[current_o].classList.remove("active");
    current_o++;
    if(current_o > overlays.length-1){
        current_o = 0;
    }
    overlays[current_o].classList.add("active");
}

function addEvento(i){
    dots[i].addEventListener("click", function(){
        dotSelect(i)
    })
}
for(let i=0; i < dots.length; i++){
    addEvento(i);
}

window.setInterval(forRight, 20000);

window.addEventListener("keydown", function(event){
  console.log(event);

  if(event.key == "ArrowLeft"){
    forLeft();
  }

  if(event.key == "ArrowRight"){
    forRight();
  }
});
