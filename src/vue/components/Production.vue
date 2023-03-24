<template>
  <section id="production">
    <div v-bind:class="'production-bg ' + $store.state.webpSupport">
      <div class="container">
        <h2 class="title">
          Полностью<br />
          отечественное производство
        </h2>
        <div class="production-wrapper">
          <div class="swiper-wrapper">
            <div
              v-for="production in productions"
              v-bind:key="production.title"
              class="swiper-slide production-item"
            >
              <div class="production-item__container">
                <div class="production-item__title-block">
                  <picture>
                    <source
                      :srcset="
                        'build/images/production-' +
                        production.imgName +
                        '.webp'
                      "
                    />
                    <img
                      :src="'src/images/result-' + production.imgName + '.png'"
                      :alt="production.title.replace(/( |<([^>]+)>)/gi, ' ')"
                    />
                  </picture>

                  <p
                    class="production-item__title"
                    v-html="production.title"
                  ></p>
                </div>
                <p class="production-item__text">{{ production.text }}</p>
              </div>
            </div>
          </div>

          <div class="production-swiper-pagination"></div>

          <div class="production-swiper-button-prev"></div>
          <div class="production-swiper-button-next"></div>
        </div>

        <div class="production-wrapper__button">
          <a draggable="false" href="#modal-order" class="button" data-fancybox>
            Оставить заявку <br />
            <span> на приобретение пивоварни</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
import buttonAnimated from "../mixins/buttonAnimated";

export default {
  data() {
    return {
      productions: [
        {
          title: "Гарантия<br>12 месяцев",
          text: "Будьте уверены в качестве своей покупки",
          imgName: "garantee",
        },

        {
          title: "Комплектующие<br>в наличии",
          text: "Всё, что необходимо для пивоварни, есть в продаже",
          imgName: "complect",
        },

        {
          title: "Сервисные<br>центры",
          text: "Оперативное решение любых ваших вопросов",
          imgName: "service",
        },
      ],
    };
  },

  mixins: [buttonAnimated],

  mounted() {
    const swiper = new Swiper(".production-wrapper", {
      spaceBetween: 30,
      slidesPerView: 2,

      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".production-swiper-button-next",
        prevEl: ".production-swiper-button-prev",
      },
      pagination: {
        clickable: true,
        el: ".production-swiper-pagination",
      },

      breakpoints: {
        1440: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
          loop: true,
        },
        992: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
          loop: true,
        },

        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          loop: true,
        },
      },
      modules: [Navigation, Pagination],
    });

    //mixin
    this.btnAnim("#production", ".production-wrapper__button a.button");
  },
};
</script>