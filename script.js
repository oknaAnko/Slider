const slideList = [
  {
    img: "img/me_today.jpg",
    text: "me"
  },
  {
    img: "img/today.jpg",
    text: "today"
  },
  {
    img: "img/me_tomorrow.jpg",
    text: "me"
  },
  {
    img: "img/tomorrow.jpg",
    text: "tomorrow"
  }
];

let active = 0;
let playing = false;
let intervalIndex;

const imgSlide = document.querySelector("img");
const h1Slide = document.querySelector("h1");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const dotList = [...document.querySelectorAll(".dot")];

const playBtn = document.querySelector(".play");
const playIcon = document.querySelector(".fa-play");
const pauseIcon = document.querySelector(".fa-pause");

const nextSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  imgSlide.src = slideList[active].img;
  h1Slide.textContent = slideList[active].text;
  dotList.forEach(dot => {
    dot.classList.remove("selected");
  });
  dotList[active].classList.add("selected");
};
nextBtn.addEventListener("click", nextSlide);

const previousSlide = () => {
  active--;
  if (active < 0) {
    active = slideList.length - 1;
  }
  imgSlide.src = slideList[active].img;
  h1Slide.textContent = slideList[active].text;
  dotList.forEach(dot => {
    dot.classList.remove("selected");
  });
  dotList[active].classList.add("selected");
};
prevBtn.addEventListener("click", previousSlide);

function dotChangeSlide() {
  dotList.forEach(dot => {
    dot.classList.remove("selected");
  });
  this.classList.add("selected");
  active = dotList.findIndex(dot => dot.classList.contains("selected"));
  imgSlide.src = slideList[active].img;
  h1Slide.textContent = slideList[active].text;
}
dotList.forEach(dot => dot.addEventListener("click", dotChangeSlide));

const sliderRun = () => {
  playIcon.classList.toggle("icon-show");
  pauseIcon.classList.toggle("icon-show");
  playing = !playing;

  if (playing === true) {
    intervalIndex = setInterval(nextSlide, 2000);
  } else {
    clearInterval(intervalIndex);
  }
};
playBtn.addEventListener("click", sliderRun);
