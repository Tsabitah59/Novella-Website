const navbarCapek = document.getElementsByTagName('header') [0];

window.addEventListener('scroll', function(){
    console.log(window.scrollY)
    if (window.scrollY > 0) {
        navbarCapek.classList.add('shadow-custom1')
    } else if (this.window.scrollY <= 0) {
        navbarCapek.classList.remove('shadow-custom1')
    }
})

var date = new Date();

var year = date.getFullYear();

var tahun = document.getElementById('tahunn')
tahun.innerHTML = year

// SWIPER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  

// const swiper = new Swiper('.mySwiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });