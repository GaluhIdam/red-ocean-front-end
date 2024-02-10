import { Component } from '@angular/core';
import SwiperCore, {
  SwiperOptions,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper';

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  swiperConfig: SwiperOptions = {
    loop: true, // Enable looping if needed
    autoplay: {
      delay: 2000,
    },
    effect: 'coverflow', // Set the coverflow effect
    coverflowEffect: {
      rotate: 90, // Rotate cards
      stretch: 1, // Stretch cards (0 means no stretch)
      depth: 100, // Depth of the effect
      modifier: 1, // Effect multiplier
      slideShadows: false, // Enable slide shadows
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
}
