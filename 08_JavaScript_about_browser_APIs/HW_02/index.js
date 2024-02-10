const imgEl = document.querySelector('.slider__image');

const dotsEl = document.querySelector(".slider__dots");
const dots = document.querySelectorAll(".slider__dot");
const sliderNavLeftEl = document.querySelector(".slider__nav-left");
const sliderNavRightEl = document.querySelector(".slider__nav-right");

const imgArr = [
    'https://selenium-python.com/wp-content/uploads/2017/11/locating-web-elements-selenium-1024x576.jpg',
    'https://selenium-python.com/wp-content/uploads/2017/11/selenium-chrome-1024x576.jpg',
    'https://selenium-python.com/wp-content/uploads/2017/11/geckodriver-selenium-1024x587.jpg'
]

let currentIndex = 0;
sliderNavRightEl.addEventListener("click", () => {
    nextIndex(1)
})
sliderNavLeftEl.addEventListener("click", () => {
    nextIndex(-1)
})

dotsEl.addEventListener("click", ({target}) => {
    currentIndex = target.dataset.index;
    slide(currentIndex)
})

function nextIndex(direction) {
    currentIndex += direction;
    if (currentIndex >= imgArr.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = imgArr.length - 1
    }
    slide(currentIndex)
}

function slide(index) {
    imgEl.src = imgArr[index];
    updateDots(index);
}

function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove("active");
    }
    dots[index].classList.add('active');
}