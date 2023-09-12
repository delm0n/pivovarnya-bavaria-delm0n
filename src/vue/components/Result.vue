<template>
  <section id="result">
    <div v-bind:class="'result-bg ' + $store.state.webpSupport">
      <div class="container">
        <h2 class="title">
          Результат, который превосходит <br />
          все ожидания
        </h2>
        <h3 class="subtitle">Варите действительно качественное пиво</h3>

        <div class="result-wrapper">
          <div class="swiper-wrapper">
            <div
              v-for="result in results"
              v-bind:key="result.title"
              class="swiper-slide result-item"
            >
              <a
                draggable="false"
                v-on:click="modalResultText = result.text"
                href="#modal-result"
                data-fancybox
                class="result-item__container"
              >
                <div class="result-item__img">
                  <picture>
                    <source
                      :srcset="
                        'build/images/result-' + result.imgName + '.webp'
                      "
                      type="image/webp"
                    />
                    <img
                      :src="'src/images/result-' + result.imgName + '.png'"
                      :alt="result.title.replace(/( |<([^>]+)>)/gi, ' ')"
                    />
                  </picture>
                </div>

                <div class="result-item__box">
                  <picture>
                    <source
                      srcset="build/images/result-box-bg.webp"
                      media="(min-width: 993px)"
                      type="image/webp"
                    />
                    <source
                      srcset="src/images/result-box-bg.png"
                      media="(min-width: 993px)"
                      type="image/png"
                    />
                    <source
                      srcset="build/images/result-box-bg-mobile.webp"
                      type="image/webp"
                    />
                    <img
                      v-lazy="{
                        src: 'src/images/result-box-bg-mobile.png',
                        loading: '',
                        error: '',
                      }"
                      alt="box"
                    />
                  </picture>

                  <div class="result-item__title">
                    <p v-html="result.title"></p>

                    <picture>
                      <source srcset="build/images/result-arrow.webp" />
                      <img
                        v-lazy="{
                          src: 'src/imagesresult-arrow.png',
                          loading: '',
                          error: '',
                        }"
                        alt="Подробнее"
                      />
                    </picture>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div class="result-swiper-pagination"></div>

          <div class="result-swiper-button-prev"></div>
          <div class="result-swiper-button-next"></div>
        </div>
      </div>
    </div>

    <div id="modal-result" style="display: none">
      <div v-bind:class="'modal-container ' + $store.state.webpSupport">
        <p class="modal-result__text">{{ modalResultText }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";

export default {
  data() {
    return {
      results: [
        {
          title: "Пиво по вашим<br>рецептам",
          text: "Создавайте собственные рецепты пива, совершенствуйте их до идеала и оттачивайте мастерство — с BAVARIA нет никаких границ для творчества!",
          imgName: "glass",
        },

        {
          title: "До 98 бутылок<br>за одну варку",
          text: "Получайте 98 бутылок всего за одну варку! Этого оборота хватит не только на домашние застолья, но и на содержание собственной пивоварни.",
          imgName: "bottle",
        },

        {
          title: "Срок хранения<br>до 1 года",
          text: "Крафтое пиво может храниться до года. При этом в первые месяцы настаивания в нём будут активно проходить процессы «дозревания».",
          imgName: "calendar",
        },
      ],

      modalResultText: "",
    };
  },

  mounted() {
    const swiper = new Swiper(".result-wrapper", {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 1,

      navigation: {
        nextEl: ".result-swiper-button-next",
        prevEl: ".result-swiper-button-prev",
      },
      pagination: {
        clickable: true,
        el: ".result-swiper-pagination",
      },

      breakpoints: {
        1440: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },

        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
      },
      modules: [Navigation, Pagination],
    });
    // ScrollTrigger.create({
    //   trigger: "#result",
    //   once: true,

    //   onEnter: () => {
    //     if (window.innerWidth >= 993) {
    //       gsap.from(["#result" + " .title", "#result" + " .subtitle"], {
    //         delay: 0.4,
    //         duration: 1.4,
    //         y: 50,
    //         stagger: 0.3,
    //         opacity: 0,
    //       });
    //     }
    //   },
    // });
  },
};
</script>
