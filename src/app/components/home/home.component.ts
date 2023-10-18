import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectCoverflow
} from "swiper/core";

// install Swiper components
SwiperCore.use([
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;

  testSwiperConfig: any = {
    navigation : false,
    pagination: {
      clickable : true
    },
    slidesPerView: '3',
    spaceBetween: 10,
    breakpoints : {
      320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    }
    }
  }

  swiperConfig: any = {
    navigation : false,
    pagination: {
      clickable : true
    },
    slidesPerView: '3',
    spaceBetween: 10,
    effect:'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    breakpoints : {
      320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    }
    }
  }
  swiperCarouselConfig: any = {
    navigation : true,
    pagination: {
      clickable : true
    },
    slidesPerView: '1',
    autoplay: {
      delay: 2000,
    },
    effect : 'fade'
  }

  constructor() { }

  ngOnInit(): void {
  
  }

  onSwiper(swiper) {
    console.log(swiper);
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

  onMouseEnter(event: any): void {
    event.target.click();
}

}

const script = document.createElement("script");
script.src = "https://static.elfsight.com/platform/platform.js";
script.setAttribute("data-use-service-core", "");
script.defer = true;
document.head.appendChild(script);

