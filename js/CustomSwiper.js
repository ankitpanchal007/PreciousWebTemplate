import Swiper from 'swiper';
import 'swiper/css';
var mySwiper = new Swiper ('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    initialSlide: 0,
    autoHeight: false,
    direction: 'horizontal',
    loop: true,
    autoplay: 5000,
    pagination: '.swiper-pagination',
    paginationType: "bullets",
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'slide',
    spaceBetween: 10,
    slidesPerView:3,
    centeredSlides: true,
    slidesOffsetBefore: 0,
    grabCursor: true,
  })        
