<template>
  <section id="photo">
    <div class="container">
      <h2 class="title">Настоящие фото пивоварни Bavaria</h2>

      <div class="photo-wrapper">
        <div class="swiper-wrapper">
          <div
            v-for="(photo, index) in photos"
            v-bind:key="index"
            :class="
              'swiper-slide photo-container photo-container-' + (index + 1)
            "
          >
            <a
              draggable="false"
              :href="'build/images/photo-' + photo.desktop + '.png'"
              data-fancybox="photo"
            >
              <picture>
                <source
                  :srcset="
                    'build/images/photo-' + photo.desktop + '-preview.webp'
                  "
                  type="image/webp"
                  media="(min-width: 993px)"
                />
                <source
                  :srcset="'src/images/photo-' + photo.desktop + '-preview.png'"
                  media="(min-width: 993px)"
                  type="image/png"
                />
                <source
                  :srcset="
                    'build/images/photo-' + photo.mobile + '-preview.webp'
                  "
                  type="image/webp"
                />

                <img
                  :src="'src/images/photo-' + photo.mobile + '-preview.png'"
                  alt="Фото пивоварни Bavaria"
                />
              </picture>
            </a>
          </div>
        </div>
        <div class="photo-swiper-pagination"></div>

        <div class="photo-swiper-button-prev"></div>
        <div class="photo-swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";

export default {
  data() {
    return {
      photos: [
        {
          desktop: "item1",
          mobile: "item1-mobile",
        },
        {
          desktop: "item2",
          mobile: "item2-mobile",
        },
        {
          desktop: "item3",
          mobile: "item3-mobile",
        },
        {
          desktop: "item4",
          mobile: "item4-mobile",
        },
        {
          desktop: "item5",
          mobile: "item5-mobile",
        },
        {
          desktop: "item6",
          mobile: "item6-mobile",
        },
      ],
    };
  },

  mounted() {
    const breakpoint = window.matchMedia("(min-width:993px)");
    let mySwiper;

    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (mySwiper !== undefined) {
          mySwiper.destroy(true, true);
        }
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };

    const enableSwiper = function () {
      mySwiper = new Swiper(".photo-wrapper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: false,
        navigation: {
          nextEl: ".photo-swiper-button-next",
          prevEl: ".photo-swiper-button-prev",
        },
        pagination: {
          clickable: true,
          el: ".photo-swiper-pagination",
        },

        modules: [Navigation, Pagination],
      });
    };

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();
  },
};
</script>
