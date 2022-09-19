  // import Swiper JS
  import Swiper, {Pagination} from 'swiper';
 // import styles bundle
 import 'swiper/swiper-bundle.min.css';

const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Pagination],
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    //буллеты
      clickable: true,
    },
 
  });