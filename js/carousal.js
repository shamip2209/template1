
document.addEventListener('DOMContentLoaded', function () {
 const swiper = new Swiper('.swiper', {
     effect: "coverflow",
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: 1,
     coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
     },
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
         renderBullet: function (index, className) {
             if (window.innerWidth < 600) {
                 // Only show dots for slides 4, 5, and 6 (Index: 3, 4, 5)
                 if (index >= 3 && index < 6) {
                     return `<span class="${className}" data-index="${index}"></span>`;
                 } else {
                     return '';
                 }
             }
             return `<span class="${className}" data-index="${index}"></span>`;
         }
     },
     autoplay: {
         delay: 3000,
         disableOnInteraction: false,
     },
     loop: true,
     breakpoints: {
         480: {
             slidesPerView: 2,
         },
         992: {
             slidesPerView: 3,
         }
     }
 });

 // Scale up the active dot
 swiper.on('slideChange', function () {
     document.querySelectorAll('.swiper-pagination-bullet').forEach((dot, i) => {
         dot.style.transform = swiper.realIndex % 3 === i ? 'scale(1.3)' : 'scale(1)';
     });
 });
});
