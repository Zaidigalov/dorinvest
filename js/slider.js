import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
	modules: [Pagination, Navigation],
  loop: true,
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	navigation: {
    nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
  },
	//autoHeight: true,
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 20,
});

export default swiper 