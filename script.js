//   <!-- JavaScript for Slider -->
const slider = document.getElementById('documentSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let slideIndex = 0;
const slideWidth = 100; // Ширина слайда в процентах

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
}

// Автоматическая смена слайдов
setInterval(() => {
    slideIndex = (slideIndex + 1) % 2; // 2 слайда
    updateSlider();
}, 5000); // Смена каждые 5 секунд

// Кнопка "Назад"
prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + 2) % 2; // Цикл назад
    updateSlider();
});

// Кнопка "Вперед"
nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % 2; // Цикл вперед
    updateSlider();
});



// splide
var main = new Splide( '#main-slider', {
  type       : 'fade',
  heightRatio: 0.5,
  pagination : false,
  arrows     : false,
  cover      : true,
} );

var thumbnails = new Splide( '#thumbnail-slider', {
  rewind          : true,
  fixedWidth      : 104,
  fixedHeight     : 58,
  isNavigation    : true,
  gap             : 10,
  focus           : 'center',
  pagination      : false,
  cover           : true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints : {
    640: {
      fixedWidth  : 66,
      fixedHeight : 38,
    },
  },
} );

main.sync( thumbnails );
main.mount();
thumbnails.mount();