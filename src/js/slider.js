let slideIndex = 0;
let slideIndexTwo = 0;
let slideIndexMenu = 0;
let slides = document.querySelectorAll(".image-slider");
let slides_two = document.querySelectorAll(".filter-container")
let slides_menu = document.querySelectorAll(".container-card-menu")
let dots = document.querySelectorAll(".dot");
let btn_left = document.querySelector("div .btn-left");
let btn_right = document.querySelector("div .btn-right");
let btn_left_menu = document.querySelector("div .btn-left-menu");
let btn_right_menu = document.querySelector("div .btn-right-menu");

let timeout = null;

window.addEventListener('resize', function(){
    if(window.innerWidth < 1200){
      function removeStyles() {
  let i;
  for (i = 0; i < slides.length; i++) {
   
    slides[i].style.display = "none";
   
  }
  for (i = 0; i < slides_two.length; i++) {
     slides_two[i].style.display = "none";
      dots[i].style.backgroundColor = "#EDEDED";
  }

  for (i = 0; i < slides_menu.length; i++) {
     slides_menu[i].style.display = "none";
  }
}

function autoSlide() {
  removeStyles();
  if (slideIndex !== slides.length - 1) {
    slideIndex = slideIndex + 1;
  } else {
    slideIndex = 0;
  }
  if (slideIndexTwo !== slides_two.length - 1) {
    slideIndexTwo = slideIndexTwo + 1;
  } else {
    slideIndexTwo = 0;
  }
  slides[slideIndex].style.display = "block";
  slides_two[slideIndexTwo].style.display = "block";
  dots[slideIndexTwo].style.backgroundColor = "#BEAD8E";
  timeout = setTimeout(autoSlide, 4000);
}

function moveSlide(e) {
  clearTimeout(timeout);
  removeStyles();
  if (e.target.value === "left") {
    if (slideIndex !== 0) {
      slideIndex = slideIndex - 1;
    } else {
      slideIndex = slides.length - 1;
    }
  }
  if (e.target.value === "right") {
    if (slideIndex !== slides.length - 1) {
      slideIndex = slideIndex + 1;
    } else {
      slideIndex = 0;
    }
  }
  slides[slideIndex].style.display = "block";
  timeout = setTimeout(autoSlide, 4000)
}

function moveSlideMenu(e) {
  removeStyles();
  if (e.target.value === "leftMenu") {
    if (slideIndexMenu !== 0) {
      slideIndexMenu = slideIndexMenu - 1;
    } else {
      slideIndexMenu = slides_menu.length - 1;
    }
  }
  if (e.target.value === "rightMenu") {
    if (slideIndexMenu !== slides_menu.length - 1) {
      slideIndexMenu = slideIndexMenu + 1;
    } else {
      slideIndexMenu = 0;
    }
  }
  slides_menu[slideIndexMenu].style.display = "block";
}

btn_left.addEventListener("click", moveSlide);
btn_right.addEventListener("click", moveSlide);
btn_left_menu.addEventListener("click", moveSlideMenu);
btn_right_menu.addEventListener("click", moveSlideMenu);

window.onload = autoSlide();

    }
});

