<template>
  <section id="feedback">
    <div class="container">
      <h2 class="title">Отзывы наших клиентов</h2>

      <div class="feedback-wrapper">
        <div class="swiper-wrapper">
          <div
            v-for="(photo, index) in photos"
            v-bind:key="index"
            class="swiper-slide feedback-item"
          >
            <a
              draggable="false"
              :href="'build/images/' + photo.name + format"
              data-fancybox="feedback"
              class="slider-wrapper__img"
            >
              <picture>
                <source
                  :srcset="'build/images/' + photo.name + '.webp'"
                  type="image/webp"
                />
                <img
                  :src="'src/images/' + photo.name + '.png'"
                  alt="Отзывы клиентов на пивоварню Bavaria"
                  loading="lazy"
                />
              </picture>
            </a>
          </div>
        </div>
        <div class="feedback-swiper-pagination"></div>

        <div class="feedback-swiper-button-prev"></div>
        <div class="feedback-swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
import store from "../store";

export default {
  data() {
    return {
      photos: [
        {
          name: "feedback-item-1",
        },
        {
          name: "feedback-item-2",
        },
        {
          name: "feedback-item-3",
        },
        {
          name: "feedback-item-4",
        },
        {
          name: "feedback-item-5",
        },
        {
          name: "feedback-item-6",
        },
      ],

      format: store.state.webpSupport == "webp" ? ".webp" : ".png",
    };
  },

  mounted() {
    const swiper = new Swiper(".feedback-wrapper", {
      spaceBetween: 30,
      slidesPerView: 2,
      lazy: true,
      slidesPerGroup: 1,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".feedback-swiper-button-next",
        prevEl: ".feedback-swiper-button-prev",
      },
      pagination: {
        clickable: true,
        el: ".feedback-swiper-pagination",
      },

      breakpoints: {
        992: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
          loop: false,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
          loop: false,
        },

        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          loop: false,
        },
      },
      modules: [Navigation, Pagination],
    });
  },
};
</script>
